import React from 'react';
import { storiesOf } from '@storybook/react';

import ImagesList from './ImagesList';

import { data } from './ImagesList.mock';

storiesOf('ImagesList', module)
  .add('ImagesList - init', () => (
    <ImagesList/>
  ))
  .add('ImagesList - with data', () => (
    <ImagesList data={data} />
  ));