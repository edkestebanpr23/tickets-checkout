import * as React from 'react';
import {
  Button, Grid, makeStyles, Typography
} from '@mui/material';
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
                <Grid item xs={5} className="body">
                  <Typography variant="h5" className="title">
                    Shakira
                  </Typography>
                  <Grid className="location">
                    <Typography variant="h6" className="place">
                      Atanasio Girardot Stadium
                    </Typography>
                    <Typography variant="body1" className="country">
                      Medellin - Colombia
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3} className="body">
                  <Typography variant="body1" className="hour">
                    5:30 pm
                  </Typography>
                  <Typography variant="body1" className="date">
                    May 10
                  </Typography>
                  <Grid className="btn-ctn">
                    <Button variant="contained">Buy tickets</Button>
                  </Grid>
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
