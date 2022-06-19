import * as React from 'react';
import { Grid, makeStyles, Typography } from '@mui/material';
import './styles.scss';
import ListCategories from '../../organism/list-categories';

type Props = {
  children: JSX.Element;
};

const Body = ({ children }: Props): JSX.Element => {
  console.log(1);
  return (
    <Grid container className="Body">
      <Grid container className="container">
        <Grid item xs={4} className="container-left">
          <ListCategories />
        </Grid>
        <Grid item xs={8} className="container-rigth">
          <Grid container>
            <Grid item xs={12} className="Card">
              <Grid container>
                <Grid item xs={4} className="image" />
                <Grid item xs={8} className="body">
                    <Typography>Shakira</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Body;
