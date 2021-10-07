import React from 'react';
import Images from 'constants/images';
import { useDispatch } from 'react-redux';
import { setIsLogout } from 'features/Auth/authSlice';
import { useHistory } from 'react-router';

const UserControl = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const handleLogout = () => {
        dispatch(setIsLogout());
        localStorage.clear();
        history.replace('/');
    }

    return (
        <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{ userInfo?.fullname }</span>
                <img className="img-profile rounded-circle"
                    src={Images.PROFILE_3}/>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                </a>
                <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                </a>
                <a className="dropdown-item" href="#">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                </a>
                <div className="dropdown-divider"></div>
                <div 
                    className="dropdown-item" href="#" 
                    data-toggle="modal" data-target="#logoutModal"
                    style={{cursor: 'pointer'}}
                    onClick={() => handleLogout()}
                >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                </div>
            </div>
        </li>
    );
};


UserControl.propTypes = {

};


export default UserControl;
