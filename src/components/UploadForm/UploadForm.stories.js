import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloProvider } from 'react-apollo';
import { client } from '../../Client';

import UploadForm from './UploadForm';

const handleImageSend = event => {
  event.preventDefault();

  const uploadFile = document.getElementById('fakeUpload');
  let file = event.target.files[0];
  uploadFile.value = file.name;
};

storiesOf('UploadForm', module)
  .add('UploadForm - init', () => (
    <ApolloProvider client={client}>
      <UploadForm/>
    </ApolloProvider>
  ))
  .add('UploadForm - with handleImageSend', () => (
    <ApolloProvider client={client}>
      <UploadForm handleImageSend={handleImageSend} />
    </ApolloProvider>
  ));
