import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { FormattedMessage } from 'react-intl';
import { Mutation } from 'react-apollo';

import { client } from '../../Client';
import timeConverter from '../../assets/scripts/TimeConverter';
import { GET_IMAGES, REMOVE_IMAGE, ADD_FAVORITE, GET_FAVORITE } from './gql';

import FavoriteIcon from '@material-ui/icons/Favorite';

import {
  Content,
  Grid,
  Item,
  RemoveButton,
  FavouriteButton,
  Image,
  DateLabel,
  Headline3
} from './ImagesList.style';

const ImagesList = ({ data, loading, error }) => {
  const [photoIndex, updatePhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  let imagesList = [];
  if (data === undefined) {
    return (imagesList = []);
  } else if (Object.entries(data).length !== 0) {
    imagesList = data.map((image, index) => {
      return (
        <Mutation
          key={index}
          mutation={REMOVE_IMAGE}
          update={(cache, { data: { removeImage } }) => {
            const { images } = client.readQuery({ query: GET_IMAGES });
            const newImages = images.filter(
              image => image.uniq !== removeImage.uniq
            );
            client.writeQuery({
              query: GET_IMAGES,
              data: { images: newImages }
            });
          }}
        >
          {(removeImage, { loading, error, data }) => (
            <Mutation
              mutation={ADD_FAVORITE}
              update={(cache, { data: { addFavoriteImage } }) => {
                const { images } = client.readQuery({ query: GET_FAVORITE });
                
                client.writeQuery({
                  query: GET_FAVORITE,
                  data: { images: images.concat([addFavoriteImage]) }
                });
              }}>
              {(addFavoriteImage, { data }) => (
                <Item key={index}>
                  <RemoveButton
                    onClick={() =>
                      removeImage({ variables: { uniq: image.uniq } })
                    }
                  >
                    X
                  </RemoveButton>
                  <FavouriteButton>
                    <FavoriteIcon
                      onClick={() => {
                        const date = new Date(parseInt(image.date, 10));
                        addFavoriteImage({
                          variables: {
                            file: image.file,
                            url: image.url,
                            date: date.toISOString(),
                            uniq: image.uniq
                          }
                        });
                      }}
                    />
                  </FavouriteButton>
                  <Image
                    src={image.url}
                    alt="Image"
                    onClick={() => {
                      updatePhotoIndex(index);
                      setIsLightboxOpen(true);
                    }}
                  />
                  <DateLabel>{timeConverter(image.date)}</DateLabel>
                </Item>
              )}
            </Mutation>
          )}
        </Mutation>
      );
    });
  }
  return (
    <Content>
      <Grid>
        {imagesList.length === 0 && !loading && (
          <Headline3>
            <FormattedMessage id="alerts.emptyImages" />
          </Headline3>
        )}
        {imagesList.length > 0 && imagesList}
        {loading && undefined}
      </Grid>

      {isLightboxOpen === true && (
        <Lightbox
          mainSrc={data[photoIndex].url}
          nextSrc={data[(photoIndex + 1) % data.length].url}
          prevSrc={
            data[
              (photoIndex + data.length - 1) % data.length
            ].url
          }
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() =>
            updatePhotoIndex(
              (photoIndex + data.length - 1) % data.length
            )
          }
          onMoveNextRequest={() =>
            updatePhotoIndex((photoIndex + 1) % data.length)
          }
        />
      )}
    </Content>
  );
};

export default ImagesList;
