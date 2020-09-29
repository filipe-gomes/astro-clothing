import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { CartContext } from '../../providers/cart/cart.provider';

import { ReactComponent as Logo } from '../../assets/astro.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

const Header = () => {
    const currentUser = useContext(CurrentUserContext);
    const { hidden } = useContext(CartContext);

    return (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {currentUser ? (
                <OptionLink as="div" onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to="/signin">
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
)};

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);