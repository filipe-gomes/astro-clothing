import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ match, fetchCollectionStartAsync }) => {
    useEffect(() => {
        fetchCollectionStartAsync();
    }, [fetchCollectionStartAsync]);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} 
                component={CollectionsOverviewContainer}
            />
            <Route path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
            />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);