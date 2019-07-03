import React, { useState, useCallback } from 'react';
import Lightbox from 'react-image-lightbox';
import { FormattedMessage } from 'react-intl';

import timeConverter from '../../assets/scripts/TimeConverter';

import FavoriteIcon from '@material-ui/icons/Favorite';

import {
  Content,
  Grid,
  Item,
  FavouriteButton,
  Image,
  DateLabel,
  Headline3
} from './FavoriteImages.style';

const FavoriteImages = ({ data, loading, error, favoriteImages }) => {
  const [photoIndex, updatePhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  let imagesList = [];
  console.log(data);
  if (data === undefined) {
    return (imagesList = []);
  } else if (Object.entries(data).length !== 0) {
    imagesList = data.map((image, index) => {
      return (
        <Item key={index}>
          <FavouriteButton>
            <FavoriteIcon onClick={() => favoriteImages(image)} />
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

export default FavoriteImages;
