import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { client } from '../../Client';

import {
  Content,
  Headline,
  Submit,
  Input,
  InputFile,
  FakeInputBox,
  Form
} from './UploadForm.style';

const ADD_IMAGE = gql`
  mutation ADD_IMAGE($file: String!, $url: String!, $date: String!) {
    addImage(file: $file, url: $url, date: $date) {
      file
      url
      date
    }
  }
`;

const GET_IMAGES = gql`
  {
    images {
      file
      url
      date
    }
  }
`;

// const handleSubmit = (event) => {
//   event.preventDefault();

//   updateImages({ variables: { file: input.files[0], url: "", date: ""}});
// };

const UploadForm = ({ handleSubmit, handleImageSend }) => {
  // let input;

  return (
    // <Mutation mutation={ADD_IMAGE} update={(cache, { data: {addImage}}) => {
    //   const { images } = client.readQuery({ query: GET_IMAGES });
    //   client.writeQuery({
    //     query: GET_IMAGES,
    //     data: { images: images.concat([addImage])}
    //   });
    // }}>
    // {(updateImages, { loading, error, data }) => (
    <Content>
      <Headline>Images Cloud</Headline>
      <Form onSubmit={event => handleSubmit(event)}>
        <InputFile
          type="file"
          onChange={event => handleImageSend(event)}
          id="upload"
        />
        <FakeInputBox>
          <Input type="text" id="fakeUpload" placeholder="Upload image..." />
          <Submit type="submit" onClick={event => handleSubmit(event)}>
            Upload
          </Submit>
        </FakeInputBox>
      </Form>
    </Content>
    //   )}
    // </Mutation>
  );
};

export default UploadForm;
