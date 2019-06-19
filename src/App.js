import React, { Fragment, useState } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import UploadForm from './components/UploadForm/UploadForm';
import ImagesList from './components/ImagesList/ImagesList';

import { CurrentDate } from './assets/scripts/CurrentDate';

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
  const [images, setImages] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();

    const upload = document.getElementById('upload').files[0];
    const uploadFile = document.getElementById('fakeUpload');
    let readFile = new FileReader();
    let date = CurrentDate();

    uploadFile.value = upload.name;
    readFile.onloadend = () => {
      setImages([
        ...images,
        { file: upload, url: readFile.result, date: date }
      ]);
    };

    console.log(images);

    readFile.readAsDataURL(upload);

    uploadFile.value = 'Upload Image...';
  };

  const handleImageSend = event => {
    event.preventDefault();

    const uploadFile = document.getElementById('fakeUpload');
    let file = event.target.files[0];
    uploadFile.value = file.name;
  };

  const removeImage = removeIndex => {
    let imagesArr = images.filter((element, index) => {
      return index !== removeIndex;
    });

    setImages([...imagesArr]);
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
                    handleSubmit={handleSubmit}
                    handleImageSend={handleImageSend}
                  />
                  {loading &&
                    <Headline>Ładowanie danych, proszę czekać...</Headline>
                  }
                  {error &&
                    <Headline>Błąd połączenia z serwerem, przepraszamy...</Headline>
                  }
                  <ImagesList images={images} removeImage={removeImage} data={data} />
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
