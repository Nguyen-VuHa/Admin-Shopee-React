import PageNotFound from 'components/PageNotFound';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import EditProduct from './pages/EditProduct';
import ProductView from './pages/ProductView';
import { getAllProduct } from './productSlice';

const ProductPage = () => {
    const match = useRouteMatch();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch]);

    return (
         <Switch>
         	<Redirect exact from={match.url} to={`${match.url}/view`} />
            <Route path={`${match.url}/view`} component={ProductView} />
            <Route path={`${match.url}/new-product`} component={EditProduct} />

            <Route path="*" component={PageNotFound}/>
        </Switch>
    );
};


ProductPage.propTypes = {

};


export default ProductPage;
