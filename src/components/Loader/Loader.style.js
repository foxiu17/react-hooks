import styled from 'styled-components';

import { Fonts } from '../../assets/Variables.style';

import {
  Content as commonContent,
  AbsoluteWrapper
} from '../../assets/common/Wrappers.style';
import { Headline4 as commonHeadline4 } from '../../assets/common/Headlines.style';

export const Wrapper = styled.div`
  ${AbsoluteWrapper}
`;

export const Content = styled.div`
  ${commonContent}
  padding-top: 50px;
  text-align: center;
`;

export const Headline4 = styled.h1`
  ${commonHeadline4}
  font-family: ${Fonts.Amatic};
  text-align: center;
`;
