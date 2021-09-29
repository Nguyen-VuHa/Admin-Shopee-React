import Footer from 'components/Footer';
import PageNotFound from 'components/PageNotFound';
import TopBar from 'components/TopBar';
import CategoryPage from 'features/Categories';
import DashBoardPage from 'features/Dashboard';
import ProductPage from 'features/Products';
import React from 'react';
import { Route, Switch } from 'react-router';

const MainPageAdmin = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
               <TopBar />
               <Switch>
                    <Route exact path="/dashboard">
                        <DashBoardPage />
                    </Route>
                    <Route path="/dashboard/product">
                        <ProductPage />
                    </Route>

                    <Route path="/dashboard/categories">
                        <CategoryPage />
                    </Route>

                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );
};


MainPageAdmin.propTypes = {

};


export default MainPageAdmin;
