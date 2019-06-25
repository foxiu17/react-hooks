import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { FormattedMessage } from 'react-intl';
import uniqid from 'uniqid';

import { client } from '../../Client';
import LoaderComponent from '../Loader/Loader';

import {
  Content,
  Headline,
  Headline4,
  Submit,
  Input,
  InputFile,
  FakeInputBox,
  Form
} from './UploadForm.style';

const ADD_IMAGE = gql`
  mutation ADD_IMAGE($file: String!, $url: String!, $date: String!, $uniq: String!) {
    addImage(imageInput: { file: $file, url: $url, date: $date, uniq: $uniq }) {
      file
      url
      date
      uniq
    }
  }
`;

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

const handleSubmit = (event, addImage, input) => {
  event.preventDefault();
  const upload = document.getElementById('upload').files[0];
  const uploadFile = document.getElementById('fakeUpload');
  let readFile = new FileReader();
  let dateISOS = new Date().toISOString();

  if (upload !== undefined) {
    uploadFile.value = upload.name;
    readFile.onloadend = () => {
      addImage({
        variables: { file: upload.name, url: readFile.result, date: dateISOS, uniq: uniqid() }
      });
    };

    readFile.readAsDataURL(upload);
    uploadFile.value = 'Upload Image...';
  } else {
    uploadFile.value = 'Nie wybrano pliku...';
  }
};

const UploadForm = ({ handleImageSend }) => {
  let input;

  return (
    <Mutation
      mutation={ADD_IMAGE}
      update={(cache, { data: { addImage } }) => {
        const { images } = client.readQuery({ query: GET_IMAGES });
        client.writeQuery({
          query: GET_IMAGES,
          data: { images: images.concat([addImage]) }
        });
      }}
    >
      {(addImage, { loading, error, data }) => (
        <Content>
          <Headline>
            <FormattedMessage id="app.title" defaultMessage="Images Cloud">
              Images Cloud
            </FormattedMessage>
          </Headline>
          <Form
            onSubmit={event => {
              handleSubmit(event, addImage, input);
            }}
          >
            <InputFile
              type="file"
              ref={node => {
                input = node;
              }}
              onChange={event => handleImageSend(event)}
              id="upload"
            />
            <FakeInputBox>
              <Input
                type="text"
                id="fakeUpload"
                placeholder="Upload image..."
              />
              <Submit type="submit">
                <FormattedMessage id="buttons.submit" defaultMessage="Submit" />
              </Submit>
            </FakeInputBox>
          </Form>
          {loading && (
            <LoaderComponent
              text={{ id: 'alerts.waiting', default: 'Waiting...' }}
              wrapper={false}
            />
          )}
          {error && (
            <Headline4>
              <FormattedMessage
                id="alerts.error"
                defaultMessage="Ups! Something went wrong...!"
              />
            </Headline4>
          )}
        </Content>
      )}
    </Mutation>
  );
};

export default UploadForm;
