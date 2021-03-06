import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Title from 'constants/title_global';

const PageNotFound = () => {
    return (
        <>
            <Helmet>
                <title>{ Title.TITLE_PAGE_NOT_FOUND }</title> 
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="container-fluid" style={{marginTop: '100px'}}>
                <div className="text-center">
                    <div className="error mx-auto" data-text="404">404</div>
                    <p className="lead text-gray-800 mb-4">Page Not Found</p>
                    <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                    <Link to="/" className="btn btn-primary btn-sm mt-3">&larr; Back to Dashboard</Link>
                </div>
            </div>
        </>
        
    );
};


PageNotFound.propTypes = {

};


export default PageNotFound;
