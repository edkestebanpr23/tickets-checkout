import * as React from 'react';
import {
  Button, Divider, Grid, IconButton, Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEvent } from '../../../features/ticket/ticketSlice';
import './styles.scss';
import Square from '../../atoms/square';
import RemoveIcon from '@mui/icons-material/Remove';
import Counter from '../counter';

const PaymentEstimate = (): JSX.Element => {
  const palco = useSelector((state: any) => state.tickets.palco);
  const palcoPrice = useSelector((state: any) => state.tickets.palcoPrice);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const onHandleClick = () => {
    // dispatch(setEvent(ticket.id));
    navigation('event');
  };

  return (
    <Square>
      <Grid container className="PaymentEstimate">
        <Grid item xs={12} height="2.5em">
          <Typography variant="h6">Your selection:</Typography>
        </Grid>
        <Grid item xs={12} className="divider">
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="body1">Place:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" fontWeight={600}>
                {palco || ' - '}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="body1">Price x 1:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" fontWeight={600}>
                {palcoPrice || '$ - COP'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className="divider">
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="body1">Units</Typography>
            </Grid>
            <Grid item xs={8} className="counter-ctn">
              <Counter />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Square>
  );
};

export default PaymentEstimate;
