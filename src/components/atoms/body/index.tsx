import * as React from 'react';
import { Grid, makeStyles } from '@mui/material';
import './styles.scss';

type Props = {
    children: JSX.Element
}

const Body = ({ children }: Props): JSX.Element => {
  console.log(1);
  return (
        <Grid
          container
          sx={{
            background: 'primary.main'
          }}
          className="Body"
        >
            <Grid className="container">
                {children}
            </Grid>
        </Grid>
  );
};

export default Body;
