import React, { useEffect, useState } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import './styles.scss';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

type Props = {
  type: 'scenario' | null;
  size: number;
  value: string;
  price: string | null;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '20em',
  wordBreak: 'break-all',
  whiteSpace: 'pre-wrap',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

const Palco = ({
  type, size, value, price
}: Props): JSX.Element => {
  console.log();
  if (type === 'scenario') {
    return (
      <Grid item xs={size} className="scenario">
        <Item className="stage">
          <Typography variant="h6" className="scenario-text">
            {value}
          </Typography>
        </Item>
      </Grid>
    );
  }
  return (
    <Grid item xs={2.5} className="scenario">
      <Item className="palco">
        <Typography variant="h6" className="scenario-text">
          {value}
<p className="price">{`$${price} COP`}</p>
        </Typography>
      </Item>
    </Grid>
  );
};

export default Palco;
