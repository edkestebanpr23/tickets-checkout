// @Components
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setPalco, setPalcoPrice } from '../../../features/ticket/ticketSlice';

// @Styles
import './styles.scss';

// @Interfaces & Types
export interface PalcoInterface {
  data: {
    type?: string;
    size: number;
    value: string;
    price: number;
  }
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '22em',
  wordBreak: 'break-all',
  whiteSpace: 'pre-wrap',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

const Palco = ({ data }: PalcoInterface): JSX.Element => {
  const palco = useSelector((state: any) => state.tickets.palco);

  const dispatch = useDispatch();

  const palcoClass = palco === data.value ? 'palco-active' : 'palco';

  const onPalcoClick = () => {
    dispatch(setPalco(data.value));
    dispatch(setPalcoPrice(data.price));
  };

  if (data.type === 'scenario') {
    return (
      <Grid item xs={data.size} className="Palco">
        <Item className="stage">
          <Typography variant="h6" className="scenario-text">
            {data.value}
          </Typography>
        </Item>
      </Grid>
    );
  }
  return (
    <Grid item xs={2.5} className="Palco">
      <Item className={palcoClass} onClick={onPalcoClick}>
        <Typography variant="h6" className="scenario-text">
          {data.value}
<p className="price">{`$${data.price} COP`}</p>
        </Typography>
      </Item>
    </Grid>
  );
};

export default Palco;
