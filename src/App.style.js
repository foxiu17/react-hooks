import styled from 'styled-components';

import {
  Section as commonSection,
  Content as commonContent,
  Container as commonContainer,
} from './assets/common/Wrappers.style';
import { Headline4 as commonHeadline4 } from './assets/common/Headlines.style';

import { Fonts } from './assets/Variables.style';

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

export const Headline4 = styled.h1`
  ${commonHeadline4}
  font-family: ${Fonts.Amatic};
  text-align: center;
`;


