import React, { Fragment, useState } from 'react';

import UploadForm from './components/UploadForm/UploadForm';

import { GlobalStyle } from './assets/common/Global.style';
import { Section, Content, Container } from './App.style';
import ImagesList from './components/ImagesList/ImagesList';

const App = () => {

  const [images, setImages ] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleImageSend = (event) => {
    event.preventDefault();

    let readFile = new FileReader();
    let file = event.target.files[0];

    readFile.onloadend = () => {
      setImages([...images, { file: file, url: readFile.result}]);
    };

    readFile.readAsDataURL(file);
  }
  return (
    <Fragment>
      <GlobalStyle />
      <Section>
        <Content>
          <Container>
            <UploadForm handleSubmit={handleSubmit} handleImageSend={handleImageSend} />
            <ImagesList images={images} />
          </Container>
        </Content>
      </Section>
    </Fragment>
  );
};

export default App;
