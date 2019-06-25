import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import { FormattedMessage } from "react-intl";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import { client } from "../../Client";
import timeConverter from "../../assets/scripts/TimeConverter";

import {
  Content,
  Grid,
  Item,
  RemoveButton,
  Image,
  DateLabel,
  Headline3
} from "./ImagesList.style";

const GET_IMAGES = gql`
  {
    images {
      file
      url
      date
      uniq
    }
  }
`;

const REMOVE_IMAGE = gql`
  mutation REMOVE_IMAGE($uniq: String!) {
    removeImage(uniq: $uniq) {
      file
      url
      date
      uniq
    }
  }
`;

const ImagesList = ({ data, loading, error }) => {
  const [photoIndex, updatePhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  let imagesList = [];
  if (data === undefined) {
    return (imagesList = []);
  } else if (Object.entries(data).length !== 0) {
    imagesList = data.images.map((image, index) => {
      return (
        <Mutation
          key={index}
          mutation={REMOVE_IMAGE}
          update={(cache, { data: { removeImage } }) => {
            const { images } = client.readQuery({ query: GET_IMAGES });
            const newImages = images.filter(image => image.uniq !== removeImage.uniq);
            client.writeQuery({
              query: GET_IMAGES,
              data: { images: newImages }
            });
          }}
        >
          {(removeImage, { loading, error, data }) => (
            <Item key={index}>
              <RemoveButton
                onClick={() => removeImage({ variables: { uniq: image.uniq } })}
              >
                X
              </RemoveButton>
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
