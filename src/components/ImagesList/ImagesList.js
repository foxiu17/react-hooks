import React from 'react';
import { Content, Grid, Item, Image } from './ImagesList.style';

const ImagesList = () => {
  return (
    <Content>
      <Grid>
        <Item>
          <Image src="https://via.placeholder.com/350" alt="Image"></Image>
        </Item>
        <Item>
          <Image src="https://via.placeholder.com/350" alt="Image"></Image>
        </Item>
        <Item>
          <Image src="https://via.placeholder.com/350" alt="Image"></Image>
        </Item>
        <Item>
          <Image src="https://via.placeholder.com/350" alt="Image"></Image>
        </Item>
        <Item>
          <Image src="https://via.placeholder.com/350" alt="Image"></Image>
        </Item>
        <Item>
          <Image src="https://via.placeholder.com/350" alt="Image"></Image>
        </Item>
        <Item>
          <Image src="https://via.placeholder.com/350" alt="Image"></Image>
        </Item>
      </Grid>
    </Content>
  );
};

export default ImagesList;
