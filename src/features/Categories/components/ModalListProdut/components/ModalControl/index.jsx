import React from 'react';

const ModalControl = (props) => {
    const { handleCloseModal, handleSubmit } = props;

    return (
        <div className="group-button">
            <div 
                className="modal-cancel" 
                onClick={handleCloseModal}
            >Hủy</div>
            <div 
                className="modal-save ml-3" 
                onClick={handleSubmit}
            >Thêm</div>
        </div>
    );
};


ModalControl.propTypes = {

};


export default ModalControl;
