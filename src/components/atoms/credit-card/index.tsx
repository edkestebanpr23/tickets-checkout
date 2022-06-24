// @Components
import React, { Dispatch, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import ReactCreditCard, { Focused } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

// @Styles
import './styles.scss';

export type CreditCard = {
  // eslint-disable-next-line no-empty-pattern
  setValues: (obj: any) => any;
};

const PaymentForm = ({ setValues }: CreditCard): JSX.Element => {
  const [cvc, setCVC] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [focus, setFocus] = useState<Focused>();
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  const saveData = () => {
    setValues({
      number,
      name,
      expiry,
      cvc
    });
  };

  const handleInputFocus = (e: any) => {
    setFocus(e.target.name);
  };

  const handleInputChange = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { name, value } = e.target;
    console.log(name, value);
    switch (name) {
      case 'number':
        setNumber(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'expiry':
        setExpiry(value);
        break;
      case 'cvc':
        setCVC(value);
        break;
      default:
        break;
    }
  };

  return (
    <div id="PaymentForm" className="PaymentForm">
      <ReactCreditCard
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' }
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Card Number"
          variant="standard"
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputProps={{ maxLength: 16 }}
        />
        <TextField
          label="Name"
          variant="standard"
          type="tel"
          name="name"
          placeholder="Card Name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <TextField
          label="Expiry"
          variant="standard"
          type="tel"
          name="expiry"
          placeholder="Card Expiry"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputProps={{ maxLength: 4 }}
        />
        <TextField
          label="CVC"
          variant="standard"
          type="tel"
          name="cvc"
          placeholder="Card CVC"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputProps={{ maxLength: 4 }}
        />
      </Box>
      <Grid container>
        <Grid item className="btn-ctn">
          <Button variant="contained" onClick={saveData}>
            Add Credit Card
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PaymentForm;
