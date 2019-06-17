import styled from 'styled-components';

import {
  Section as commonSection,
  Content as commonContent,
  Container as commonContainer
} from './assets/common/Wrappers.style';

export const Section = styled.div`
  ${commonSection}
`;

export const Content = styled.div`
  ${commonContent}
  padding: 0 0 30px 0;
`;

export const Container = styled.div`
  ${commonContainer}
`;
