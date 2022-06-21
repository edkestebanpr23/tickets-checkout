import React, { useEffect, useState } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import './styles.scss';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

type Props = {
  type: string;
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

const Stage = ({ type }: Props): JSX.Element => {
  const space = {
    scenario: {
      size: 1.5,
      value: 'Scenario',
      type: 'scenario',
      price: 0
    },
    palcos: [
      {
        size: 2.5,
        value: 'Palco A',
        price: 150000
      },
      {
        size: 2.5,
        value: 'Palco B',
        price: 110000
      },
      {
        size: 3.5,
        value: 'Palco C',
        price: 90000
      },
      {
        size: 2,
        value: 'Palco D',
        price: 45000
      }
    ]
  };

  return (
    <Grid container xs={8} className="Stage">
      <Grid container columnSpacing={2}>
        <Grid item xs={1.5} className="scenario">
          <Item className="stage">
            <Typography variant="h6" className="scenario-text">
              Scenario
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={2.5} className="scenario">
          <Item className="palco">
            <Typography variant="h6" className="scenario-text">
              Palco 1
<p className="price">$950.000 COP</p>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={2.5} className="scenario">
          <Item className="palco">
            <Typography variant="h6" className="scenario-text">
              Palco 2
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={3.5} className="scenario">
          <Item className="palco">
            <Typography variant="h6" className="scenario-text">
              Palco 3
            </Typography>
          </Item>
        </Grid>
        <Grid item xs className="scenario">
          <Item className="palco">
            <Typography variant="h6" className="scenario-text">
              Palco 4
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Stage;
