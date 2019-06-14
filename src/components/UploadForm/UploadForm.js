import React from 'react';

import { Content, Headline, Submit, Input, InputFile, FakeInputBox, Form } from './UploadForm.style';

const UploadForm = ({handleSubmit, handleImageSend}) => {
  return (
    <Content>
      <Headline>UPLOAD YOUR IMAGES</Headline>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <InputFile type="file" onChange={(event) => handleImageSend(event)} id="upload" />
        <FakeInputBox>
          <Input type="text" id="fakeUpload" placeholder="Upload image..." />
          <Submit type="submit" onClick={(event) => handleSubmit(event)} >Upload</Submit>
        </FakeInputBox>
      </Form>
      {/* <form onSubmit={(event) => handleSubmit(event)}>
        <Input type="file" onChange={(event) => handleImageSend(event)} />
        <Submit type="submit" onClick={(event) => handleSubmit(event)} >Upload</Submit>
      </form> */}
    </Content>
  );
};

export default UploadForm;
