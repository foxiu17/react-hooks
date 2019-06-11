import styled from 'styled-components';

import { Media } from '../../assets/Mixins.style';

import { Content as commonContent, Grid as commonGrid } from '../../assets/common/Wrappers.style';
import { Image as commonImage } from '../../assets/common/Images.style';

export const Content = styled.div`
  ${commonContent}
`;

export const Grid = styled.div`
  ${commonGrid}
`;

export const Item = styled.div`
  width: 33.33%;
  padding: 10px;
  transition: .3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  ${Media.lg`
    width: 50%;
  `}

  ${Media.xs`
    width: 100%;
  `}
`;

export const Image = styled.img`
  ${commonImage}
`;

