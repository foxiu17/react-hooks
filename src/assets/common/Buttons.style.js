import { css } from 'styled-components';

import { Colors, Fonts } from '../Variables.style';

export const Submit = css`
  padding: 8px 20px;
  transition: .2s ease;
  border-radius: 2px;
  border: 0;
  background-color: ${Colors.matisse};
  color: ${Colors.white};
  font-family: ${Fonts.Amatic};
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.5px;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.mischka};
    color: ${Colors.matisse};
  }

`;
