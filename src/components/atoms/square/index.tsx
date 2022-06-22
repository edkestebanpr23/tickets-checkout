import * as React from 'react';
import { Grid } from '@mui/material';
import './styles.scss';

type Props = {
  children: JSX.Element;
}

const Square = ({ children }: Props): JSX.Element => (
      <Grid item xs={12} className="Square">
        { children }
      </Grid>
);

export default Square;
