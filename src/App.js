import React, { Fragment, useState } from 'react';

import UploadForm from './components/UploadForm/UploadForm';

import { GlobalStyle } from './assets/common/Global.style';
import { Section, Content, Container } from './App.style';
import ImagesList from './components/ImagesList/ImagesList';

const App = () => {

  const [images, setImages ] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const upload = document.getElementById('upload').files[0];
    const uploadFile = document.getElementById('fakeUpload');
    let readFile = new FileReader();

    uploadFile.value = upload.name;
    readFile.onloadend = () => {
      setImages([...images, { file: upload, url: readFile.result}]);
    };

    readFile.readAsDataURL(upload);

    uploadFile.value = "Upload Image...";
  }

  const handleImageSend = (event) => {
    event.preventDefault();

    const uploadFile = document.getElementById('fakeUpload');
    let file = event.target.files[0];
    uploadFile.value = file.name;
  }

  const removeImage = (removeIndex) => {
    let imagesArr = images.filter((element, index) => {
      return index !== removeIndex;
    });

    setImages([...imagesArr]);
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Section>
        <Content>
          <Container>
            <UploadForm handleSubmit={handleSubmit} handleImageSend={handleImageSend} />
            <ImagesList images={images} removeImage={removeImage} />
          </Container>
        </Content>
      </Section>
    </Fragment>
  );
};

export default App;
