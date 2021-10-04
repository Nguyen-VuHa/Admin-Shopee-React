import PageNotFound from 'components/PageNotFound';
import { getAllProduct } from 'features/Products/productSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { getAllCategory } from './categorySlice';
import CategoryView from './pages/CategoryView';
import EditCategory from './pages/EditCategory';

const CategoryPage = () => {
    const match = useRouteMatch();
    const dispacth = useDispatch();

    useEffect(() => {
        const action_category = getAllCategory();
        dispacth(action_category);
        const action_product = getAllProduct();
        dispacth(action_product);
    }, [dispacth]);

    return (
        <>
            <Switch>
                <Redirect exact from={match.url} to={`${match.url}/view`} />
                <Route path={`${match.url}/view`} component={CategoryView} />
                <Route path={`${match.url}/new-category`} component={EditCategory} />
                <Route path={`${match.url}/:idCategory`} component={''} />

                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
        </>
    );
};


CategoryPage.propTypes = {

};


export default CategoryPage;
