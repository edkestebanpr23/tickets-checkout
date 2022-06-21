import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import './styles.scss';
import Palco from '../../atoms/palco';

type Props = {
  type: string;
};

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
        <Palco data={space.scenario} />
        {
          space.palcos.map(palco => (
            <Palco data={palco} />
          ))
        }
      </Grid>
    </Grid>
  );
};

export default Stage;
