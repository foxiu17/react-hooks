import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

export const Section = styled.div`
  display: block;
  width: 100%;
  min-height: 100vh;
  background-color: #d5f2e2;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: block;
  width: 100%;
  padding: 50px 20px;
  text-align: center;
`;
