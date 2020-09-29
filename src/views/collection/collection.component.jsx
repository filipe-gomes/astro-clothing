import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionsContext from '../../contexts/collections/collections.context';

import { CollectionPageContainer, TitleContainer, ItemsContainer } from './collection.styles'

const CollectionPage = ({ match }) => {
    const collections = useContext(CollectionsContext);
    const collection = collections[match.params.collectionId];
    const { title, items } = collection;
    
    return (
        <CollectionPageContainer>
            <TitleContainer>{ title }</TitleContainer>
            <ItemsContainer>
                {items.map((item) => (
                <CollectionItem key={item.id} item={item} />
                ))}
            </ItemsContainer>
        </CollectionPageContainer>
    )
};

export default CollectionPage;