import React, { Fragment, useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { FormattedMessage } from 'react-intl';

import UploadForm from './components/UploadForm/UploadForm';
import ImagesList from './components/ImagesList/ImagesList';

import { GlobalStyle } from './assets/common/Global.style';
import { Section, Content, Container, Headline } from './App.style';

const GET_IMAGES = gql`
  {
    images {
      file
      url
      date
    }
  }
`;

const App = () => {

  const handleImageSend = event => {
    event.preventDefault();

    const uploadFile = document.getElementById('fakeUpload');
    let file = event.target.files[0];
    uploadFile.value = file.name;
  };

  return (
    <Query query={GET_IMAGES}>
      {({ loading, error, data }) => {
        return (
          <Fragment>
            <GlobalStyle />
            <Section>
              <Content>
                <Container>
                  <UploadForm
                    handleImageSend={handleImageSend}
                  />
                  {loading &&
                    <Headline><FormattedMessage id="alerts.loadingData" defaultMessage="Loading data, wait, please..." /></Headline>
                  }
                  {error &&
                    <Headline><FormattedMessage id="alerts.error" defaultMessage="Ups! Something went wrong...!" /></Headline>
                  }
                  <ImagesList data={data} />
                </Container>
              </Content>
            </Section>
          </Fragment>
        );
      }}
    </Query>
  );
};

export default App;
