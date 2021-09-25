import React from 'react';


const FormControl = () => {
    return (
        <div>
            <div className="btn btn-primary btn-user btn-block">
                Login
            </div>
            <hr />
            <div className="btn btn-google btn-user btn-block">
                <i className="fab fa-google fa-fw"></i> Login with Google
            </div>
            <div className="btn btn-facebook btn-user btn-block">
                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
            </div>
        </div>
    );
};


FormControl.propTypes = {

};


export default FormControl;
