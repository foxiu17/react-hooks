import React from "react";

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
          <Image src={image.url} alt="Image" />
          <DateLabel>{timeConverter(image.date)}</DateLabel>
        </Item>
      );
    });
  }
  return (
    <Content>
      <Grid>{imagesList}</Grid>
    </Content>
  );
};

export default ImagesList;
