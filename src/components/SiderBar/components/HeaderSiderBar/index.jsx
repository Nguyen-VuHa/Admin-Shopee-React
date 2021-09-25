import React from 'react';
import { Link } from 'react-router-dom';

const SiderBarHeader = () => {
    return (
        <>
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin BIBI Shop<sup></sup></div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
        </>
    );
};


SiderBarHeader.propTypes = {

};


export default SiderBarHeader;
