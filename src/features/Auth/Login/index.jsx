import React from 'react';
import 'assets/styles/sb-admin-2.min.css';
import LoginForm from './components/LoginForm';
import { Helmet } from 'react-helmet';
import Title from 'constants/title_global';

const PageLogin = () => {
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
                                                <LoginForm />
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
