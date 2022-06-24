import * as React from 'react';
import Body from '../../components/atoms/body';
import './styles.scss';
import CheckoutLayout from '../../layouts/checkout';

const Checkout = (): JSX.Element => (
    <Body>
      <CheckoutLayout />
    </Body>
);

export default Checkout;
