import React, { Fragment, useState, useEffect } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { FormattedMessage } from "react-intl";

import UploadForm from "./components/UploadForm/UploadForm";
import ImagesList from "./components/ImagesList/ImagesList";
import FavoriteImages from "./components/FavoriteImages/FavoriteImages";
import LoaderComponent from "./components/Loader/Loader";

import { GlobalStyle } from "./assets/common/Global.style";
import { Section, Content, Container, Headline4 } from "./App.style";
import Navigation from "./components/Navigation/Navigation";

const GET_IMAGES = gql`
  {
    images {
      file
      url
      date
      uniq
    }
    favoriteImages{
      file
      url
      date
      uniq
    }
  }
`;

const App = () => {
  const [content, setContent] = useState(0);
  const [favoriteImages, addFavoriteImage] = useState([]);
  console.log(favoriteImages);
  const handleImageSend = event => {
    event.preventDefault();

    const uploadFile = document.getElementById("fakeUpload");
    let file = event.target.files[0];
    uploadFile.value = file.name;
  };

  const handleChangeContent = (event, newValue) => {
    setContent(newValue);
  };

  const addToFavorite = image => {
    console.log(`adding to favorite: `, image);
    addFavoriteImage([...favoriteImages, image]);
    console.log(favoriteImages);
  };

  return (
    <Query query={GET_IMAGES} pollInterval={500}>
      {({ loading, error, data }) => {
        console.log(data);

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
                          id: "alerts.loadingData",
                          default: "Loading data, please wait..."
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
                    <ImagesList
                      data={data.images}
                      loading={loading}
                      error={error}
                      favoriteImages={addToFavorite}
                    />
                  </Container>
                )}
                {content === 1 && (
                  <>
                    <Container>
                      <Headline4>Favorite photos</Headline4>
                      <FavoriteImages data={data.favoriteImages} />
                    </Container>
                  </>
                )}
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
