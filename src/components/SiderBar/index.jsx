import React, { useState } from 'react';
import 'assets/styles/sb-admin-2.min.css';

import Images from 'constants/images';
import SiderBarHeader from './components/HeaderSiderBar';
import { Link } from 'react-router-dom';

const SiderBar = () => {
    const [isToggle, setisToggle] = useState(false);

    const handleClick = () => {
        setisToggle(!isToggle);
    }
    
    return (
        <ul 
            className={isToggle ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled' 
            : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'}
            id="accordionSidebar">
            <SiderBarHeader />

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Trang Tổng Quan
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fab fa-product-hunt"></i>
                    <span>Sản Phẩm Của Shop</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Product Management:</h6>
                        <Link className="collapse-item" to="/dashboard/product">Sản Phẩm</Link>
                        <Link className="collapse-item" to="/dashboard/categories">Bộ Sưu Tập</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <Link className="collapse-item" to="/" >Colors</Link>
                        <Link className="collapse-item" to="/">Borders</Link>
                        <Link className="collapse-item" to="/">Animations</Link>
                        <Link className="collapse-item" to="/">Other</Link>
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Addons
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <Link className="collapse-item" to="/login">Login</Link>
                        <Link className="collapse-item" to="/login">Register</Link>
                        <Link className="collapse-item" to="/login">Forgot Password</Link>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <Link className="collapse-item" to="/login">404 Page</Link>
                        <Link className="collapse-item" to="/login">Blank Page</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />
            
            <div className="text-center d-none d-md-inline">
                <button 
                    className="rounded-circle border-0" 
                    id="sidebarToggle"
                    onClick={() => handleClick()}
                ></button>
            </div>

            {/* <!-- Sidebar Message --> */}
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src={Images.ROCKET} alt="..." />
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro"  target="_blank" rel="noreferrer">Upgrade to Pro!</a>
            </div>
        </ul>
    );
};


SiderBar.propTypes = {

};


export default SiderBar;
