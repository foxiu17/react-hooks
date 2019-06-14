import React from "react";
import { Content, Grid, Item, RemoveButton, Image } from "./ImagesList.style";

const ImagesList = ({ images, removeImage }) => {
  let imagesList = [];
  if (images.length > 0) {
    imagesList = images.map((image, index) => {
      return (
        <Item key={index} onClick={() => removeImage(index)}>
          <RemoveButton>
            X
          </RemoveButton>
          {index}
          <Image src={image.url} alt="Image"></Image>
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
