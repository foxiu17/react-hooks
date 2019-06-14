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
  letter-spacing: 4px;
`;

export const Submit = styled.button`
  ${commonSubmit}
  margin-left: 20px;
`;

export const Form = styled.form`
  position: relative;
`;

export const FakeInputBox = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 50%;
  justify-content: center;
  padding: 5px 0;
  transform: translateX(-37%);
`;

export const InputFile = styled.input`
  ${commonInput}
  position: relative;
  min-width: 300px
  max-width: 300px;
  opacity: 0;
  z-index: 2;
`;

export const Input = styled.input`
  ${commonInput}
  letter-spacing: 1.5px;
  cursor: pointer;
`;
