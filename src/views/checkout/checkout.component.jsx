import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckout from '../../components/stripe-button/stripe-button.component';
import { CartContext } from '../../providers/cart/cart.provider';

import { selectCartTotal } from '../../redux/cart/cart.selectors';

import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlock, TotalContainer, WarningContainer } from './checkout.styles';

const CheckoutPage = () => {
    const { cartItems, cartItemsTotal } = useContext(CartContext);

    return (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${cartItemsTotal}</TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </WarningContainer>
        <StripeCheckout price={cartItemsTotal} />
    </CheckoutPageContainer>
)};

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);