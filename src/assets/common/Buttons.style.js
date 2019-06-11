import { css } from 'styled-components';

import { Colors } from '../Variables.style';

export const Submit = css`
  padding: 8px 20px;
  transition: .2s ease;
  border-radius: 2px;
  border: 0;
  background-color: ${Colors.casal};
  color: ${Colors.white};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.smaltBlue};
  }

`;
