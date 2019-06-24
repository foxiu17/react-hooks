import React, { useState } from "react";
import Lightbox from 'react-image-lightbox';

import timeConverter from "../../assets/scripts/TimeConverter";

import {
  Content,
  Grid,
  Item,
  RemoveButton,
  Image,
  DateLabel,
} from "./ImagesList.style";

const ImagesList = ({ data }) => {
  const [photoIndex, updatePhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  let imagesList = [];
  if (data === undefined) {
    return (
      imagesList = []
    );
  } else if (Object.entries(data).length !== 0) {
    imagesList = data.images.map((image, index) => {
      return (
        <Item key={index}>
          <RemoveButton>X</RemoveButton>
          <Image src={image.url} alt="Image" onClick={() => {updatePhotoIndex(index); setIsLightboxOpen(true);}}/>
          <DateLabel>{timeConverter(image.date)}</DateLabel>
        </Item>
      );
    });
  }
  return (
    <Content>
      <Grid>{imagesList}</Grid>
      {isLightboxOpen === true &&
        <Lightbox
          mainSrc={data.images[photoIndex].url}
          nextSrc={data.images[(photoIndex + 1) % data.images.length].url}
          prevSrc={data.images[(photoIndex + data.images.length - 1) % data.images.length].url}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() => updatePhotoIndex((photoIndex + data.images.length - 1) % data.images.length)}
          onMoveNextRequest={() => updatePhotoIndex((photoIndex + 1) % data.images.length)}
        />
      }
    </Content>
  );
};

export default ImagesList;
