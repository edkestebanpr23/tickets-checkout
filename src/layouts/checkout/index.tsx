/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
// @Components
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import AddIcon from '../../components/atoms/icons/add';
import CreditCardIcon from '../../components/atoms/icons/credit-card';
import PaymentForm from '../../components/atoms/credit-card';

// @Styles
import './styles.scss';

const CheckoutLayout = (): JSX.Element => {
  const { state }: any = useLocation();
  const { selected, subtotal } = state;
  const [showCard, setShowCard] = useState<boolean>(false);
  const [cardData, setCardData] = useState<any>({});
  const [selectedCard, setSelectedCard] = useState<boolean>(false);
  const navigation = useNavigate();

  const fee = 45000;
  const orderPF = 5200;
  const totalPayment = fee + orderPF + (subtotal || 0);

  useEffect(() => {
    if (!cardData.name) {
      setSelectedCard(false);
    }
  }, [cardData]);

  const onHandleClick = () => {
    navigation('/success');
  };

  const onEditClick = () => {
    setShowCard(true);
  };

  const onDeleteClick = () => {
    setShowCard(true);
    setCardData({});
  };

  const toggleSelectedCard = () => {
    if (cardData?.name) {
      setSelectedCard(card => !card);
    }
  };

  const addCreditCard = () => {
    setShowCard(true);
  };

  const addData = (data: any) => {
    setShowCard(false);
    setCardData(data);
  };

  return (
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
            trusted seller. We will email you Instructions on how to accept them
            on the original ticket providers mobile app.
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

          <Grid container gap="1em" className="add-new-card-ctn">
            <Grid item>
              <AddIcon />
            </Grid>
            <Grid item>
              <CreditCardIcon />
            </Grid>
            <Grid item>
              <Typography className="a-link" onClick={addCreditCard}>
                Add New Card
              </Typography>
            </Grid>
          </Grid>
          {showCard || !cardData.number ? (
            <Grid>
              <PaymentForm setValues={addData} />
            </Grid>
          ) : (
            <Grid container className="bg-blue">
              <Grid item xs={1}>
                <Radio checked={selectedCard} onClick={toggleSelectedCard} />
              </Grid>
              <Grid item xs>
                <Grid container>
                  <Grid item xs={1}>
                    <Grid className="visa-img" />
                  </Grid>
                  <Grid item xs={11} paddingLeft="1em">
                    <Typography>
                      {`Visa - ${cardData?.number?.substr(-4)}`}
                    </Typography>
                    <Typography color="text.secondary">
                      {`${
                        cardData?.name || 'User Name'
                      } | exp. ${cardData?.expiry
                        ?.toString()
                        .substr(0, 2)}/${cardData?.expiry?.substr(2)}`}
                    </Typography>
                    <Typography>
                      <span
                        className="a-link"
                        onClick={onEditClick}
                      >
                        Edit
                      </span>
                      {' | '}
                      <span
                        className="a-link"
                        onClick={onDeleteClick}
                      >
                        Delete
                      </span>
                    </Typography>
                  </Grid>
                  <Grid />
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid>
            <Typography className="text-df-bold">Or Pay With</Typography>
            <Typography className="text-df-bold">
              By using a digital wallet and continuing past this page, you have
              read and are accepting{' '}
              <span className="a-link">Terms of Use</span>
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
                <Typography variant="h6">
                  {`$${totalPayment || 549.11} COP`}
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="subtitle not-mt">Tickets</Typography>
            {selected.length
              && selected.map((pal: any, index: number) => {
                try {
                  // eslint-disable-next-line no-unsafe-optional-chaining
                  const pCount = pal?.count || 1;
                  const pPalcoPrice = pal?.palcoPrice || 458;
                  const multi = pCount * pPalcoPrice;
                  return (
                    <Grid container key={index}>
                      <Grid item xs>
                        <Typography className="text-df">
                          {`${pal?.palco}: $${pal?.palcoPrice} COP x ${pal?.count}`}
                          {/* Resale tickets: $229.00 x 2 */}
                        </Typography>
                      </Grid>
                      <Grid item xs textAlign="end">
                        <Typography className="text-df">{`$${multi} COP`}</Typography>
                      </Grid>
                    </Grid>
                  );
                } catch (e) {
                  return (
                    <Grid container key={index}>
                      <Grid item xs>
                        <Typography className="text-df">
                          Resale tickets: $229.00 x 2
                        </Typography>
                      </Grid>
                      <Grid item xs textAlign="end">
                        <Typography className="text-df">458.00</Typography>
                      </Grid>
                    </Grid>
                  );
                }
              })}
            <Typography className="subtitle">Notes From Seller</Typography>
            <Typography className="text-df">
              xfr XFER Proof of at least one dose of COVID-19 vaccination for
              ages 5 to 11 and guests ages 12 and up will be required to show
              proof of two COVID-19 vaccine doses or one dose of the Johnson &
              Johnson vaccine. <br /> Masks must be worn.
            </Typography>
            <Typography className="subtitle">Fees</Typography>
            <Grid container>
              <Grid item xs>
                <Typography className="text-df">
                  {`Service Fee: $${fee} COP x 1`}
                </Typography>
              </Grid>
              <Grid item xs textAlign="end">
                <Typography className="text-df">${fee} COP</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Typography className="text-df">
                  Orden Processing Fee
                </Typography>
              </Grid>
              <Grid item xs textAlign="end">
                <Typography className="text-df">${orderPF} COP</Typography>
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
            <Typography className="note" marginBottom="1.5em" marginTop="1.5em">
              <span className="a-link">Cancel order</span>
            </Typography>
            <Typography className="note" marginTop="1.5em">
              * All Sales Final - No Refunds
            </Typography>
            <Typography className="note">
              I have read and agree to the current{' '}
              <span className="a-link">Terms of Use</span>
            </Typography>
            <Button
              color="success"
              variant="contained"
              fullWidth
              onClick={onHandleClick}
              disabled={!selectedCard}
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
  );
};

export default CheckoutLayout;
