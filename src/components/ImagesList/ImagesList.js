import React, { useState, useCallback } from 'react';
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

const ImagesList = ({ data, loading, error, favoriteImages }) => {
  const [photoIndex, updatePhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
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
            <Mutation mutation={ADD_FAVORITE}>
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
                        forceUpdate();
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
      </Grid>

      {isLightboxOpen === true && (
        <Lightbox
          mainSrc={data.images[photoIndex].url}
          nextSrc={data.images[(photoIndex + 1) % data.images.length].url}
          prevSrc={
            data.images[
              (photoIndex + data.images.length - 1) % data.images.length
            ].url
          }
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() =>
            updatePhotoIndex(
              (photoIndex + data.images.length - 1) % data.images.length
            )
          }
          onMoveNextRequest={() =>
            updatePhotoIndex((photoIndex + 1) % data.images.length)
          }
        />
      )}
    </Content>
  );
};

export default ImagesList;
