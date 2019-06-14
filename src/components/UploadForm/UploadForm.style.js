import styled from 'styled-components';

import { Colors } from '../../assets/Variables.style';

import { Content as commonContent } from '../../assets/common/Wrappers.style';
import { Headline as commonHeadline } from '../../assets/common/Headlines.style';
import { Submit as commonSubmit } from '../../assets/common/Buttons.style';
import { Input as commonInput } from '../../assets/common/Inputs.style';

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

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  ${commonInput}
`;

export const FakeInputBox = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 50%;
  justify-content: center;
  padding: 5px 0;
  transform: translateX(-32%);
`;

export const InputFile = styled.input`
  ${commonInput}
  position: relative;
  min-width: 199px
  max-width: 199px;
  opacity: 0;
  z-index: 2;
`;
