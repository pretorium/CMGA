import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import css from '@styled-system/css';

export const HomeContainer = styled(Grid)`
  ${css({
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundImage: "url('/images/banner.jpg')",
  })}
`;
