// @Component
import React, { useEffect } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useCounter } from '../../../hooks/useCounter';

// @Styles
import './styles.scss';

// @Interfaces & Types
interface CounterInterface {
    onChange: (n: number) => void;
}

const Counter = ({ onChange }: CounterInterface): JSX.Element => {
  const { value, increase, decrease } = useCounter(1, 0);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Grid container className="Counter">
      <Grid item xs>
        <IconButton onClick={decrease}>
          <RemoveIcon />
        </IconButton>
      </Grid>
      <Grid item xs className="text-ctn">
        <Typography className="text">
    {value}
        </Typography>
      </Grid>
      <Grid item xs>
        <IconButton onClick={increase}>
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Counter;
