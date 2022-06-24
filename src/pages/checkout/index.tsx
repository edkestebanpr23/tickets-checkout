/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography
} from '@mui/material';
import Body from '../../components/atoms/body';
import { useLocation } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import AddIcon from '../../components/atoms/icons/add';
import './styles.scss';
import CreditCardIcon from '../../components/atoms/icons/credit-card';

const Checkout = (props: any): JSX.Element => {
  const { state }: any = useLocation();
  const { selected, subtotal } = state;
  console.log(selected, subtotal);

  const onHandleClick = () => {
    console.log('Pay');
  };
  return (
    <Body>
      <Grid container className="Checkout" gap="0.8em">
        <Grid item xs>
          <Grid container className="ctn">
            <Typography variant="h6" className="with-icon">
              Delivery
              <CheckCircleOutlineIcon className="ckeckcircle" />
            </Typography>
            <Typography className="subtitle special-mt">
              Mobile Entry - Free
            </Typography>
            <Typography color="text.secondary">
              Thickets Available by -----
            </Typography>
            <Typography color="text.secondary">
              These mobile tickets will be transferred directly to yoyr from a
              trusted seller. We will email you Instructions on how to accept
              them on the original ticket providers mobile app.
            </Typography>
          </Grid>
          <Grid container className="ctn">
            <Typography variant="h6" className="with-icon">
              Payment
              <CheckCircleOutlineIcon className="ckeckcircle" />
            </Typography>
            <Typography className="subtitle special-ml special-mt">
              Use Credit/ Debit Card
            </Typography>
            <Grid container className="bg-blue">
              <Grid item xs={1}>
                <Radio />
              </Grid>
              <Grid item xs>
                <Grid container>
                  <Grid item xs={1}>
                    <Grid className="visa-img" />
                  </Grid>
                  <Grid item xs={11} paddingLeft="1em">
                    <Typography>Visa - 9999</Typography>
                    <Typography color="text.secondary">
                      User Name | exp. 00/11
                    </Typography>
                    <Typography>
                      <a href="#" className="a-link">
                        Edit
                      </a>
                      {' | '}
                      <a href="#" className="a-link">
                        Delete
                      </a>
                    </Typography>
                  </Grid>
                  <Grid />
                </Grid>
              </Grid>
            </Grid>
            <Grid container gap="1em" className="add-new-card-ctn">
              <Grid item>
                 <AddIcon />
              </Grid>
              <Grid item>
                <CreditCardIcon />
              </Grid>
              <Grid item>
                <a href="#" className="a-link">
                  Add New Card
                </a>
              </Grid>
            </Grid>
            <Grid>
              <Typography className="text-df-bold">Or Pay With</Typography>
              <Typography className="text-df-bold">
                By using a digital wallet and continuing past this page, you
                have read and are accepting{' '}
                <a href="#" color="typography.secondary" className="a-link">
                  Terms of Use
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5} className="ctn-right">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container>
                <Grid item xs>
                  <Typography variant="h6" className="title">
                    Total
                  </Typography>
                </Grid>
                <Grid item xs textAlign="end" className="title">
                  <Typography variant="h6">$549.11</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="subtitle not-mt">Tickets</Typography>
              <Grid container>
                <Grid item xs>
                  <Typography className="text-df">
                    Resale tickets: $229.00 x 2
                  </Typography>
                </Grid>
                <Grid item xs textAlign="end">
                  <Typography className="text-df">$458.00</Typography>
                </Grid>
              </Grid>
              <Typography className="subtitle">Notes From Seller</Typography>
              <Typography className="text-df">
                xfr XFER Proof of at least one dose of COVID-19 vaccination dor
                ages 5 to 11 and guests ages 12 and up will be required to show
                proof of two COVID-19 vaccine doses or one dose of the Johnson &
                Johnson vaccine. <br /> Masks must be worn.
              </Typography>
              <Typography className="subtitle">Fees</Typography>
              <Grid container>
                <Grid item xs>
                  <Typography className="text-df">
                    Service Fee: $44.08 x 2
                  </Typography>
                </Grid>
                <Grid item xs textAlign="end">
                  <Typography className="text-df">$88.16</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs>
                  <Typography className="text-df">
                    Orden Processing Fee
                  </Typography>
                </Grid>
                <Grid item xs textAlign="end">
                  <Typography className="text-df">$2.95</Typography>
                </Grid>
              </Grid>
              <Typography className="subtitle">Delivery</Typography>
              <Grid container>
                <Grid item xs>
                  <Typography className="text-df">Mobile Entry</Typography>
                </Grid>
                <Grid item xs textAlign="end">
                  <Typography className="text-df">Free</Typography>
                </Grid>
              </Grid>
              <Typography
                className="note"
                marginBottom="1.5em"
                marginTop="1.5em"
              >
                <a href="#" color="typography.secondary" className="a-link">
                  Cancel order
                </a>
              </Typography>
              <Typography className="note" marginTop="1.5em">
                * All Sales Final - No Refunds
              </Typography>
              <Typography className="note">
                I have read and agree to the current{' '}
                <a href="#" color="typography.secondary" className="a-link">
                  Terms of Use
                </a>
              </Typography>
              <Button
                color="success"
                variant="contained"
                fullWidth
                onClick={onHandleClick}
              >
                Place Order
              </Button>
              <Typography className="note-small">
                * Exceptions may apply, see our Terms of use.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Body>
  );
};

export default Checkout;
