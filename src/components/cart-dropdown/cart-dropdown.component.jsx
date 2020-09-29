import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../providers/cart/cart.provider';

import { CartDropdownContainer, CartDropdownButton, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles';


const CartDropdown = ({ history }) => {
    const { cartItems, toggleHidden } = useContext(CartContext);

    return (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                ) : (
                    <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
                )
            }
        </CartItemsContainer>
        <CartDropdownButton 
            onClick={() => {
                history.push('/checkout');
                toggleHidden();
            }}>
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
)};

export default withRouter(CartDropdown);