import { css } from 'styled-components';

import { Colors, Fonts } from '../Variables.style';

export const Input = css`
  max-width: 100%;
  padding: 6px 15px;
  border: 0;
  border-radius: 2px;
  background-color: ${Colors.mischka};
  color: ${Colors.black};
  font-family: ${Fonts.Amatic};
  font-size: 16px;
  font-weight: 700;
  appearance: none;
  cursor: pointer;
`;
