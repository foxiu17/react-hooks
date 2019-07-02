import React, { Fragment, useState } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { FormattedMessage } from 'react-intl';

import UploadForm from './components/UploadForm/UploadForm';
import ImagesList from './components/ImagesList/ImagesList';
import LoaderComponent from './components/Loader/Loader';

import { GlobalStyle } from './assets/common/Global.style';
import { Section, Content, Container, Headline4 } from './App.style';
import Navigation from './components/Navigation/Navigation';

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

const App = () => {
  const [content, setContent] = useState(0);
  const handleImageSend = event => {
    event.preventDefault();

    const uploadFile = document.getElementById('fakeUpload');
    let file = event.target.files[0];
    uploadFile.value = file.name;
  };

  const handleChangeContent = (event, newValue) => {
    setContent(newValue);
  };

  return (
    <Query query={GET_IMAGES}>
      {({ loading, error, data }) => {
        return (
          <Fragment>
            <GlobalStyle />
            <Section>
              <Content>
                <Navigation
                  handleChange={handleChangeContent}
                  content={content}
                />
                {content === 0 && (
                  <Container>
                    <UploadForm handleImageSend={handleImageSend} />
                    {loading && (
                      <LoaderComponent
                        text={{
                          id: 'alerts.loadingData',
                          default: 'Loading data, please wait...'
                        }}
                        wrapper={true}
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
                    <ImagesList data={data} loading={loading} error={error} />
                  </Container>
                )}
                {content === 1 && <Headline4>Favorite photos</Headline4>}
                {content === 2 && <Headline4>Contact page</Headline4>}
                {content === 3 && <Headline4>Help page</Headline4>}
              </Content>
            </Section>
          </Fragment>
        );
      }}
    </Query>
  );
};

export default App;
