import styled from 'styled-components';

import { Media } from '../../assets/Mixins.style';

import { Content as commonContent, Grid as commonGrid } from '../../assets/common/Wrappers.style';
import { Image as commonImage } from '../../assets/common/Images.style';
import { Headline3 as commonHeadline3 } from '../../assets/common/Headlines.style';
import { Colors } from '../../assets/Variables.style';

export const Content = styled.div`
  ${commonContent}

  ${Media.sm`
    padding-top: 50px;
  `}
`;

export const Grid = styled.div`
  ${commonGrid}
`;

export const RemoveButton = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 3px 5px;
  transition: .2s;
  border-radius: 3px;
  background-color: ${Colors.red};
  color: ${Colors.white};
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    background-color: ${Colors.roofTerracotta};
  }
`;

export const DateLabel = styled.div`
  display: none;
  position: absolute;
  bottom: 13px;
  left: 10px;
  width: calc(100% - 20px);
  padding: 20px;
  background-color: rgba(0, 0, 0, .45);
  color: ${Colors.white};
  text-align: center;
`;

export const Item = styled.div`
  position: relative;
  width: 33.33%;
  margin-bottom: 10px;
  padding: 10px;
  transition: .3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    opacity: .8;
  }

  &:hover ${RemoveButton},
  &:hover ${DateLabel} {
    display: block;
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
  border-radius: 5px;
`;

export const Headline3 = styled.h3`
  ${commonHeadline3}
`;

