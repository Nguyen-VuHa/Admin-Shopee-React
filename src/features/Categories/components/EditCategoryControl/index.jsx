import React from 'react';


const EditCategoryControl = (props) => {
    const { handleCloseForm, handleSubmitForm } = props;
    
    const onSubmit = () => {
        handleSubmitForm();
    }
    return (
        <div className="group-btn">
            <div 
                type="button" 
                className="btn btn-cancel-pd" 
                 onClick={handleCloseForm}
            >
                Hủy
            </div>
            <div 
                type="button" 
                className="btn btn-save-pd" 
                onClick={() => onSubmit()}
            >
                Lưu Lại
            </div>
        </div>
    );
};


EditCategoryControl.propTypes = {

};


export default EditCategoryControl;
