import styled from 'styled-components';

import { Colors } from '../../assets/Variables.style';
import { Media } from '../../assets/Mixins.style';

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

  ${Media.sm`
    margin: 20px 0;
  `}
`;

export const Form = styled.form`
  position: relative;
  max-width: 100%;
`;

export const FakeInputBox = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 50%;
  justify-content: center;
  padding: 5px 0;
  transform: translateX(-37%);

  ${Media.sm`
    left: 0%;
    flex-wrap: wrap;
    width: 100%;
    transform: translateX(0%);
  `}
`;

export const InputFile = styled.input`
  ${commonInput}
  position: relative;
  max-width: 300px;
  min-width: 300px;
  opacity: 0;
  z-index: 2;

  ${Media.sm`
    width: 100%;
    max-width: 100%;
    min-width: 200px;
  `}
`;

export const Input = styled.input`
  ${commonInput}
  min-width: 300px;
  letter-spacing: 1.5px;
  cursor: pointer;

  ${Media.sm`
    width: 100%;
    min-width: 200px;
  `}
`;
