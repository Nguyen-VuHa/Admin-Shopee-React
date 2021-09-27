import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';

const EditProductControl = (props) => {
    const { handleSubmitForm } = props;
    const history = useHistory();
    
    const handleSubmit = () => {
        handleSubmitForm();
    }

    const handleGoBack = () => {
        history.push('/dashboard/product/view');
    }
    
    return (
        <div className="edit-product__control">
            <div className="group-btn">
                <div 
                    type="button" 
                    className="btn btn-cancel-pd"
                    onClick={() => handleGoBack()}
                >
                    Hủy
                </div>
                <div 
                    type="button" 
                    className="btn btn-save-pd" 
                    onClick={() => handleSubmit()}
                >
                    Lưu Lại
                </div>
            </div>
        </div>
    );
};


EditProductControl.propTypes = {

};


export default EditProductControl;
