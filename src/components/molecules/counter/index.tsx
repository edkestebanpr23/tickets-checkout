import React, { useState } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import './styles.scss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Counter = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  const onHandleClick = () => {
  };

  return (
    <Grid container className="Counter">
      <Grid item xs={2}>
        <IconButton>
          <RemoveIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2} className="text-ctn">
        <Typography className="text">
    {counter}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Counter;
