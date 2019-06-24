import React, { Fragment } from 'react';
import Loader from 'react-loader-spinner';
import { FormattedMessage } from 'react-intl';

import { Wrapper, Content, Headline4 } from './Loader.style';

const LoaderComponent = ({text, wrapper}) => {
  console.log(text);
  console.log(wrapper);
  return (
    <Fragment>
      {wrapper === true && (
        <Wrapper>
          <Loader type="RevolvingDot" color="#000000" height="50" width="50" />
          {text && (
            <Headline4>
              <FormattedMessage
                id={text.id}
                defaultMessage={text.default}
              />
            </Headline4>
          )}
        </Wrapper>
      )}
      {wrapper !== true && (
        <Content>
          <Loader type="RevolvingDot" color="#000000" height="50" width="50" />
          {text && (
            <Headline4>
              <FormattedMessage
                id={text.id}
                defaultMessage={text.default}
              />
            </Headline4>
          )}
        </Content>
      )}
    </Fragment>
  );
};

export default LoaderComponent;
