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
          className="Body"
        >
            <Grid container className="container">
                <Grid item xs={4} className="container-left">
                    {/* {children} */}
                </Grid>
                <Grid item xs={8} className="container-rigth">
                    {/* {children} */}
                </Grid>

            </Grid>
        </Grid>
  );
};

export default Body;
