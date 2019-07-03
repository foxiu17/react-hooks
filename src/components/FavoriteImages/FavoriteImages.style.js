import styled from "styled-components";

import { Media } from "../../assets/Mixins.style";

import {
  Content as commonContent,
  Grid as commonGrid
} from "../../assets/common/Wrappers.style";
import { Image as commonImage } from "../../assets/common/Images.style";
import { Headline3 as commonHeadline3 } from "../../assets/common/Headlines.style";
import { Colors, Fonts } from "../../assets/Variables.style";

export const Content = styled.div`
  ${commonContent}

  ${Media.sm`
    padding-top: 50px;
  `}
`;

export const Grid = styled.div`
  ${commonGrid}
`;

export const FavouriteButton = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 3px 5px;
  transition: 0.2s;
  color: ${Colors.white};
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    color: ${Colors.red};
  }
`;

export const DateLabel = styled.div`
  display: none;
  position: absolute;
  bottom: 13px;
  left: 10px;
  width: calc(100% - 20px);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.45);
  color: ${Colors.white};
  text-align: center;
`;

export const Item = styled.div`
  position: relative;
  width: 33.33%;
  margin-bottom: 10px;
  padding: 10px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }

  &:hover ${DateLabel}, &:hover ${FavouriteButton} {
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
  font-family: ${Fonts.Amatic};
`;
