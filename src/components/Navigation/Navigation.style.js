import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';

import { Colors } from '../../assets/Variables.style';

export const NavWrapper = styled.div`
  display: block;
  width: 100%;
  background-color: ${Colors.matisse};
`;

export const useStyles = makeStyles({
  wrapper: {
    backgroundColor: `${Colors.matisse}`,
  }
});
