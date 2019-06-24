import React from 'react';
import { storiesOf } from '@storybook/react';

import LoaderComponent from './Loader';

import { text } from './Loader.mock';

storiesOf('Loader', module)
  .add('Loader - init', () => <LoaderComponent />)
  .add('Loader - with text', () => <LoaderComponent text={text} />)
  .add('Loader - with wrapper attr with true', () => <LoaderComponent wrapper={true} />)
  .add('Loader - with wrapper attr with false', () => <LoaderComponent wrapper={false} />)
  .add('Loader - with text and wrapper with true', () => <LoaderComponent text={text} wrapper={true} />);
