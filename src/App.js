import React, { Fragment } from 'react';

import UploadForm from './components/UploadForm/UploadForm';

import { GlobalStyle } from './assets/common/Global.style';
import { Section, Content, Container } from './App.style';
import ImagesList from './components/ImagesList/ImagesList';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Section>
        <Content>
          <Container>
            <UploadForm />
            <ImagesList />
          </Container>
        </Content>
      </Section>
    </Fragment>
  );
};

export default App;
