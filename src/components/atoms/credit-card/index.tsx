import React, { useState } from 'react';
import ReactCreditCard, { Focused } from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const PaymentForm = (): JSX.Element => {
  const [cvc, setCVC] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [focus, setFocus] = useState<Focused>();
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  //   state = {
  //     cvc: '',
  //     expiry: '',
  //     focus: '',
  //     name: '',
  //     number: ''
  //   };

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
    // const { name, value } = e.target;

    // this.setState({ [name]: value });
  };

  return (
    <div id="PaymentForm">
      <ReactCreditCard
        cvc={cvc}
        expiry={expiry}
        //   focused={focus}
        focused={focus}
        name={name}
        number={number}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="name"
          placeholder="Card Name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="expiry"
          placeholder="Card Expiry"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="Card CVC"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
};

export default PaymentForm;
