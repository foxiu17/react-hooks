import React, { useState } from "react";
import { Mutation } from "react-apollo";
import Lightbox from "react-image-lightbox";
import { FormattedMessage } from "react-intl";

import { GET_FAVORITE, REMOVE_FAVORITE } from './gql';

import { client } from '../../Client';
import timeConverter from "../../assets/scripts/TimeConverter";

import FavoriteIcon from "@material-ui/icons/Favorite";

import {
  Content,
  Grid,
  Item,
  FavouriteButton,
  Image,
  DateLabel,
  Headline3
} from "./FavoriteImages.style";



const FavoriteImages = ({ data, loading, error }) => {
  const [photoIndex, updatePhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  let favoriteList = [];
  console.log(data);
  if (data === undefined) {
    return (favoriteList = []);
  } else if (Object.entries(data).length !== 0) {
    favoriteList = data.map((image, index) => {
      return (
        <Mutation 
          key={index} 
          mutation={REMOVE_FAVORITE}
          update={(cache, { data: { removeFavoriteImage } }) => {
            const { images } = client.readQuery({ query: GET_FAVORITE });
            const newImages = images.filter(
              image => image.uniq !== removeFavoriteImage.uniq
            );
            client.writeQuery({
              query: GET_FAVORITE,
              data: { images: newImages }
            });
          }}>
          {(removeFavoriteImage, { loading, error, data }) => (
            <Item>
              <FavouriteButton>
                <FavoriteIcon
                  onClick={() => {
                    removeFavoriteImage({ variables: { uniq: image.uniq } });
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
      );
    });
  }
  return (
    <Content>
      <Grid>
        {favoriteList.length === 0 && !loading && (
          <Headline3>
            <FormattedMessage id="alerts.emptyImages" />
          </Headline3>
        )}
        {favoriteList.length > 0 && favoriteList}
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

export default FavoriteImages;
