import { QuestionContext } from 'context/questionContext';
import React, { useContext } from 'react';
import './question_modal.scss';

const QuestionModal  = () => {
    const {state, dispatch} = useContext(QuestionContext);

    const handleCloseModal = () => {
        dispatch({
            type: 'REMOVE_QUESTION',
            payload: {
                submit: false,
            }
        })
    }

    const handleSubmitModal = () => {
        dispatch({
            type: 'REMOVE_QUESTION',
            payload: {
                submit: true,
            }
        })
    }

    return (
        <div id="my-modal" className={state.status ? 'modal-question fade show' : 'modal-question fade'}>
            <div className="modal-dialog-bg">
                <div className="card border-0 p-sm-3 p-2 justify-content-center">
                    <div className="card-header pb-0 bg-white border-0">
                        <div className="row">
                            <div className="col ml-auto mb-3">
                                <div 
                                    type="button" className="close" 
                                    data-dismiss="modal" aria-label="Close"
                                    onClick={() => handleCloseModal()}
                                > 
                                    <span aria-hidden="true">&times;</span> 
                                </div>
                            </div>
                        </div>
                        <p className="font-weight-bold mb-3">{state.question}</p>
                        {state.messageWarning ? <p className="text-muted ">{state.messageWarning}</p> : ''}
                    </div>
                    <div className="card-body px-sm-4 mb-2 pt-1 pb-0">
                        <div className="row justify-content-end no-gutters">
                            <div className="col-auto">
                                <div 
                                    type="button" className="btn btn-light text-muted mr-3" 
                                    data-dismiss="modal"
                                    onClick={() => handleCloseModal()}
                                >Cancel</div>
                            </div>
                            <div className="col-auto">
                                <div 
                                    type="button" className="btn btn-danger px-4" 
                                    data-dismiss="modal"
                                    onClick={() => handleSubmitModal()}
                                >
                                {state.type === 'DELETE' ? 'Delete' : 'Xác Nhận'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


QuestionModal.propTypes = {

};


export default QuestionModal;
