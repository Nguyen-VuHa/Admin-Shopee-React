import React from 'react';
import ItemControl from './components/ItemControl';

import SearchControl from './components/SearchControl';
import UserControl from './components/UserControl';

const TopBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <SearchControl />
            <ul className="navbar-nav ml-auto">
                <ItemControl />
                <div className="topbar-divider d-none d-sm-block"></div>
                <UserControl />
            </ul>
        </nav>
    );
};


TopBar.propTypes = {

};


export default TopBar;
