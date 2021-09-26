import Footer from 'components/Footer';
import PageNotFound from 'components/PageNotFound';
import TopBar from 'components/TopBar';
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
                </Switch>
            </div>
            <Footer />
        </div>
    );
};


MainPageAdmin.propTypes = {

};


export default MainPageAdmin;
