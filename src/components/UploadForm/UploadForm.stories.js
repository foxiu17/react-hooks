import React from 'react';
import { storiesOf } from '@storybook/react';

import UploadForm from './UploadForm';

storiesOf('UploadForm', module)
  .add('UploadForm - init', () => (
    <UploadForm/>
  ));