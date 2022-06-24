// @Components
import * as React from 'react';
import { Grid } from '@mui/material';

// @Styles
import './styles.scss';

// @Interfaces & Types
type BodyProps = {
  children: JSX.Element
}

const Body = ({ children }: BodyProps): JSX.Element => (
    <Grid container className="Body">
      <Grid container className="container">
        { children }
      </Grid>
    </Grid>
);

export default Body;
