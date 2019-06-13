import React from 'react';

import { Content, Headline, Submit, Input } from './UploadForm.style';

const UploadForm = ({handleSubmit, handleImageSend}) => {
  return (
    <Content>
      <Headline>UPLOAD YOUR IMAGES</Headline>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Input type="file" onChange={(event) => handleImageSend(event)} />
        <Submit type="submit" onClick={(event) => handleSubmit(event)} >Upload</Submit>
      </form>
    </Content>
  );
};

export default UploadForm;
