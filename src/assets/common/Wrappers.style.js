import { css } from 'styled-components';

import { Colors } from '../Variables.style';

export const Section = css`
  display: block;
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.matisse};
  background-image: linear-gradient(to top, ${Colors.matisse}, ${Colors.mischka});
`;

export const Container = css`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Content = css`
  display: block;
  width: 100%;
`;

export const Grid = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
