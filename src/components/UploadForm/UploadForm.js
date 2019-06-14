import React from 'react';

import { Content, Headline, Submit, Input, InputFile, FakeInputBox, Form } from './UploadForm.style';

const UploadForm = ({handleSubmit, handleImageSend}) => {
  return (
    <Content>
      <Headline>Images Cloud</Headline>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <InputFile type="file" onChange={(event) => handleImageSend(event)} id="upload" />
        <FakeInputBox>
          <Input type="text" id="fakeUpload" placeholder="Upload image..." />
          <Submit type="submit" onClick={(event) => handleSubmit(event)} >Upload</Submit>
        </FakeInputBox>
      </Form>
    </Content>
  );
};

export default UploadForm;
