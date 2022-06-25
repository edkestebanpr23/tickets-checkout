// @Components
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// @Styles
import './styles.scss';
import { useNavigate } from 'react-router-dom';

const SuccessLayout = (): JSX.Element => {
  const navigation = useNavigate();

  const goToHome = () => {
    navigation('/');
  };

  return (
    <>
    <Grid container className="SuccessLayout">
      <Grid item xs={7} className="card-success">
        <Grid container>
          <Grid item xs>
            <Typography>
              Your purchase has been successful, this is your reservation code
              TXK75BW.
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <CheckCircleOutlineIcon className="ckeckcircle" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid container className="GoHome">
      <Grid item>
        <Typography variant="h6" className="link" onClick={goToHome}>
          Go home to buy more
        </Typography>
      </Grid>
    </Grid>
    </>
  );
};

export default SuccessLayout;
