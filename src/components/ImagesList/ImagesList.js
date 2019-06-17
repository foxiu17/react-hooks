import React from "react";
import { Content, Grid, Item, RemoveButton, Image, DateLabel } from "./ImagesList.style";

const ImagesList = ({ images, removeImage }) => {
  let imagesList = [];
  if (images.length > 0) {
    imagesList = images.map((image, index) => {
      return (
        <Item key={index} >
          <RemoveButton onClick={() => removeImage(index)}>
            X
          </RemoveButton>
          <Image src={image.url} alt="Image"></Image>
          <DateLabel>
            {image.date}
          </DateLabel>
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
