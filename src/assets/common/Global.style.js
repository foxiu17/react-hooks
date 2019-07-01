import { createGlobalStyle } from 'styled-components';
import { Colors } from '../Variables.style';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Dancing Script', cursive;
  }

  * {
    box-sizing: border-box;
  }

  .MuiTab-textColorInherit.Mui-selected {
    border: 0;
    border-bottom: 2px solid ${Colors.white};
  }
`;
