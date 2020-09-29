import React, { useContext } from 'react';

import { CollectionItemContainer, ImageContainer, AddButton, CollectionFooterContainer, NameContainer, PriceContainer } from './collection-item.styles';
import { CartContext } from '../../providers/cart/cart.provider';

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    const { addItem } = useContext(CartContext);

    return (
        <CollectionItemContainer>
            <ImageContainer className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart 
            </AddButton>
        </CollectionItemContainer>
    );
};

export default CollectionItem;