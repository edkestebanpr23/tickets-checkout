// @Components
import * as React from 'react';
import { Grid } from '@mui/material';

// @Styles
import './styles.scss';

// @Interfaces & Types
type Props = {
  children: JSX.Element;
};

const Square = ({ children }: Props): JSX.Element => (
  <Grid item xs={12} className="Square">
    {children}
  </Grid>
);

export default Square;
