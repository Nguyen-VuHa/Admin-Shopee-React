import React, { useContext, useState } from 'react';
import 'assets/styles/sb-admin-2.min.css';
import LoginForm from './components/LoginForm';
import { Helmet } from 'react-helmet';
import Title from 'constants/title_global';
import { ToastContext } from 'context/toastContext';
import { v4 as uuidv4 } from 'uuid';
import authApi from 'api/authApi';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '../authSlice';

const PageLogin = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const {dispatch} = useContext(ToastContext);
    const history = useHistory();
    const disPatch = useDispatch();

    const handleLoginSubmit = async () => {
        if(email && password) {
            var data = {
                email,
                password,
            }
            var result = await authApi.loginAdmin(data);
            
            if(result.status === 'success' && result.infoUser.role === 'admin')
            {
                disPatch(setIsLogin());
                window.localStorage.setItem('accessToken', result.accessToken);
                window.localStorage.setItem('refreshToken', result.refreshToken);
                window.localStorage.setItem('userInfo', JSON.stringify(result.infoUser));
                history.push('/');
            }
            else if (result.status === 'success' && result.infoUser.role === 'user'){
                dispatch({
                    type: 'ADD_NOTIFICATION',
                    payload: {
                        id: uuidv4(),
                        type: "WARNING",
                        title: "Warning!",
                        message: 'Tài khoản không thuộc Admin!',
                        position: "top-right",
                    }
                })
            }
            else {
                dispatch({
                    type: 'ADD_NOTIFICATION',
                    payload: {
                        id: uuidv4(),
                        type: "WARNING",
                        title: "Warning!",
                        message: result.status,
                        position: "top-right",
                    }
                })
            }
        }
        else {
            dispatch({
                type: 'ADD_NOTIFICATION',
                payload: {
                    id: uuidv4(),
                    type: "WARNING",
                    title: "Warning!",
                    message: 'Bạn cần nhập đầy đủ thông tin!',
                    position: "top-right",
                }
            })
        }
    }

    return (
        <>
            <Helmet>
                <title>{ Title.TITLE_LOGIN }</title> 
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="bg-gradient-primary" style={{height: '100vh'}}>
                <div className="container">
                    {/* <!-- Outer Row --> */}
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* <!-- Nested Row within Card Body --> */}
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Admin BIBI Shop!</h1>
                                                </div>
                                                <LoginForm 
                                                    handleLoginSubmit={handleLoginSubmit}
                                                    setemail={setemail}
                                                    setpassword={setpassword}
                                                />
                                                <hr />
                                                <div className="text-center">
                                                    <a className="small" href="https://bibi-cosmetic-store.herokuapp.com/" target="_blank" rel="noreferrer">Đi đến trang bán hàng?</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


PageLogin.propTypes = {

};


export default PageLogin;
