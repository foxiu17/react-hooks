import styled from 'styled-components';

import {
  Section as commonSection,
  Content as commonContent,
  Container as commonContainer
} from './assets/common/Wrappers.style';
import { Headline as commonHeadline } from './assets/common/Headlines.style';

export const Section = styled.div`
  ${commonSection}
`;

export const Content = styled.div`
  ${commonContent}
  padding: 0 0 30px 0;
`;

export const Container = styled.div`
  ${commonContainer}
`;

export const Headline = styled.h1`
  ${commonHeadline}
  font-size: 46px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;
