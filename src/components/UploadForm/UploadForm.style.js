import styled from 'styled-components';

import { Colors } from '../../assets/Variables.style';

import { Content as commonContent } from '../../assets/common/Wrappers.style';
import { Headline as commonHeadline } from '../../assets/common/Headlines.style';
import { Submit as commonSubmit } from '../../assets/common/Buttons.style';

export const Content = styled.div`
  ${commonContent}
  padding: 50px 20px;
  text-align: center;
`;

export const Headline = styled.h1`
  ${commonHeadline}
`;

export const Submit = styled.button`
  ${commonSubmit}
  margin-left: 20px;
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 6px 15px;
  border: 2px solid ${Colors.smaltBlue};
  border-radius: 2px;
  color: ${Colors.smaltBlue};
  font-size: 12px;
  font-weight: 600;
  appearance: none;
  cursor: pointer;
`;
