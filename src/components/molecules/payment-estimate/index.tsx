// @Components
import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Square from '../../atoms/square';
import Counter from '../counter';

// @Styles
import './styles.scss';

// @Interfaces & Types
interface PalcoInterface {
  palco: string;
  palcoPrice: number;
}

interface SelectedInterface {
  palco: string;
  palcoPrice: number;
  count: number;
}

const PaymentEstimate = (): JSX.Element => {
  const palco: string = useSelector((state: any) => state.tickets.palco);
  const palcoPrice: number = useSelector(
    (state: any) => state.tickets.palcoPrice
  );

  const [palcos, setPalcos] = useState<PalcoInterface[]>([]);
  const [selected, setSelected] = useState<SelectedInterface[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    const filteredPalcos = palcos.filter((pal) => pal.palco !== palco);
    if (palco !== '') {
      setPalcos(() => [...filteredPalcos, { palco, palcoPrice }]);
    }
  }, [palco]);

  const onChangeSelected = (
    value: number,
    palcoName: string,
    price: number
  ) => {
    setSelected((palc) => [
      ...palc.filter((pal) => pal.palco !== palcoName),
      { palco: palcoName, palcoPrice: price, count: value }
    ]);
  };

  useEffect(() => {
    let subTotal = 0;
    selected.forEach((palc) => {
      subTotal += palc.palcoPrice * palc.count;
    });

    setSubtotal(subTotal);
  }, [selected]);

  const navigation = useNavigate();

  const onHandleClick = () => {
    navigation('/checkout', {
      state: {
        selected,
        subtotal
      }
    });
  };

  return (
    <Square>
      <Grid container className="PaymentEstimate">
        <Grid item xs={12} className="divider">
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="body1">Place:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" fontWeight={600}>
                Price
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {palcos.length
          ? palcos.map((pal) => (
            <Grid item xs={12} className="counter-info" key={pal.palco}>
              <Grid container>
                <Grid item xs>
                  <Typography variant="body1">{pal.palco}</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="body1">{pal.palcoPrice}</Typography>
                </Grid>
                <Grid item xs={4} className="counter-ctn">
                  <Counter
                    onChange={(value) =>
                      onChangeSelected(value, pal.palco, pal.palcoPrice)}
                  />
                </Grid>
              </Grid>
            </Grid>
          )) : (<Typography variant="subtitle1">Please select locations...</Typography>)}
        <Grid item xs={12} className="counter-info">
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="body1">Subtotal:</Typography>
            </Grid>
            <Grid item xs={8} marginBottom="1em">
              <Typography variant="body1" fontWeight={600}>
                {`$${subtotal} COP` || '$ 0 COP'}
              </Typography>
            </Grid>
            <Grid item xs className="counter-info">
              <Button
                color="success"
                variant="contained"
                fullWidth
                onClick={onHandleClick}
              >
                Pay
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Square>
  );
};

export default PaymentEstimate;
