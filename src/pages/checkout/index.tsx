// @Components
import * as React from 'react';
import Body from '../../components/atoms/body';
import CheckoutLayout from '../../layouts/checkout';

// @Styles
import './styles.scss';

const Checkout = (): JSX.Element => (
    <Body>
      <CheckoutLayout />
    </Body>
);

export default Checkout;
