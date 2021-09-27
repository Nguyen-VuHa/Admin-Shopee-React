import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import Images from 'constants/images';
import './modal_loading.scss';

const ModalLoading = (props) => {
    const { isShowModal } = props;
    return (
        <div 
            className={isShowModal ? "modal fade show" : "modal fade"}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header img" style={{backgroundImage: `url(${Images.BG_MD_LOADING})`}}>
                        <button type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" className="ion-ios-close"></span>
                        </button>
                    </div>
                    <div className="modal-body text-center">
                        <h2 style={{fontSize: '2.5rem'}} >Loading . . .</h2>
                        <div className="icon d-flex align-items-center justify-content-center mt-3">
                            <PuffLoader color="#ff5b0e" size="80"/>
                        </div>
                        <h4 className="mt-3">Chờ một chút! Hệ thống đang xử lý ...</h4>
                    </div>
                </div>
            </div>
		</div>
    );
};


ModalLoading.propTypes = {

};


export default ModalLoading;
