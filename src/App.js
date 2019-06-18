import React, { Fragment, useState } from "react";

import { Query, Mutation, ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

import { client } from "./Client";

import UploadForm from "./components/UploadForm/UploadForm";
import ImagesList from "./components/ImagesList/ImagesList";

import { CurrentDate } from "./assets/scripts/CurrentDate";

import { GlobalStyle } from "./assets/common/Global.style";
import { Section, Content, Container } from "./App.style";

const GET_IMAGES = gql`
  {
    images {
      file
      url
      date
    }
  }
`;

const GetImagesData = (images, removeImage) => (
  <Query query={GET_IMAGES}>
    {({ loading, error, data }) => {
      if (loading) {
        console.log("loading...");
      }
      if (error) {
        console.log(`Error... ${error.message}`);
      }

      if (Object.entries(data).length !== 0) {
        // console.log(`data not undefined....`);
        return (
          <ImagesList images={images} removeImage={removeImage} data={data.images} />
        );
      }

      return null;
    }}
  </Query>
);

const App = () => {
  const [images, setImages] = useState([]);

  
  const handleSubmit = event => {
    event.preventDefault();
    
    const upload = document.getElementById("upload").files[0];
    const uploadFile = document.getElementById("fakeUpload");
    let readFile = new FileReader();
    let date = CurrentDate();
    
    uploadFile.value = upload.name;
    readFile.onloadend = () => {
      setImages([
        ...images,
        { file: upload, url: readFile.result, date: date }
      ]);
    };
    
    readFile.readAsDataURL(upload);
    
    uploadFile.value = "Upload Image...";
  };
  
  const handleImageSend = event => {
    event.preventDefault();
    
    const uploadFile = document.getElementById("fakeUpload");
    let file = event.target.files[0];
    uploadFile.value = file.name;
  };
  
  const removeImage = removeIndex => {
    let imagesArr = images.filter((element, index) => {
      return index !== removeIndex;
    });
    
    setImages([...imagesArr]);
  };
  const imagesData = GetImagesData(images, removeImage);
  
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <GlobalStyle />
        <Section>
          <Content>
            <Container>
              <UploadForm
                handleSubmit={handleSubmit}
                handleImageSend={handleImageSend}
              />
              {imagesData}
              {/* <ImagesList images={images} removeImage={removeImage} /> */}
              <GetImagesData />
            </Container>
          </Content>
        </Section>
      </Fragment>
    </ApolloProvider>
  );
};

export default App;
