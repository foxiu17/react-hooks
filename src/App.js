import React, { Fragment } from "react";

import UploadForm from "./components/UploadForm";

import { Section, Container, GlobalStyle, Content } from "./styled-components/wrappers/wrappers";
import { Headline } from "./styled-components/components/headlines";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Section>
        <Content>
          <Headline>UPLOAD YOUR IMAGES</Headline>
          <Container>
            <UploadForm />
          </Container>
        </Content>
      </Section>
    </Fragment>
  );
};

export default App;
