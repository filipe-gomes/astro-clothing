import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { CartContext } from '../../providers/cart/cart.provider';

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

const CartIcon = () => {
    const { toggleHidden, cartItemsCount } = useContext(CartContext);

    return (
    <CartIconContainer onClick={toggleHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
)};

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);