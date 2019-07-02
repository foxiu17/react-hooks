import styled from 'styled-components';
import { styled as materialStyled } from '@material-ui/styles';

import AppBar from '@material-ui/core/AppBar';

import { Colors } from '../../assets/Variables.style';

export const NavWrapper = styled.div`
  display: block;
  width: 100%;
`;

export const NavBar = materialStyled(AppBar)({
  background: `${Colors.matisse}`,
});
