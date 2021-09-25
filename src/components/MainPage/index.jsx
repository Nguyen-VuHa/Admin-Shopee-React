import Footer from 'components/Footer';
import PageNotFound from 'components/PageNotFound';
import TopBar from 'components/TopBar';
import DashBoardPage from 'features/Dashboard';
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
                </Switch>
            </div>
            <Footer />
        </div>
    );
};


MainPageAdmin.propTypes = {

};


export default MainPageAdmin;
