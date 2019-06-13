import React from "react";
import { Content, Grid, Item, Image } from "./ImagesList.style";

const ImagesList = ({ images }) => {
  let imagesList = [];
  if (images.length > 0) {
    imagesList = images.map((image, index) => {
      return (
        <Item key={index}>
          <Image src={image.url} alt="Image" />
        </Item>
      );
    });
  }
  return (
    <Content>
      <Grid>
        {imagesList}
      </Grid>
    </Content>
  );
};

export default ImagesList;
