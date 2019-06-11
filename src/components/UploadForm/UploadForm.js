import React from 'react';

import { Content, Headline, Submit, Input } from './UploadForm.style';

const UploadForm = () => {
  return (
    <Content>
      <Headline>UPLOAD YOUR IMAGES</Headline>
      <form>
        <Input type="file" />
        <Submit type="button">Upload</Submit>
      </form>
    </Content>
  );
};

export default UploadForm;
