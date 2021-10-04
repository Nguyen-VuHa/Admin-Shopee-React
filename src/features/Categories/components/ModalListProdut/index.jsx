import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalControl from './components/ModalControl';
import ModalListView from './components/ModalListView';
import ModalSearch from './components/ModalSearch';
import { setAllProduct } from './modalSlice';
import './modal_category.scss';

const ModalListProduct = (props) => {
    const { isShow, handleCloseModal } = props;
    const [listChoose, setlistChoose] = useState([]);
    const stateChoose = useSelector((state) => state.modalProduct);
    const dispacth = useDispatch();

    useEffect(() => {
        setlistChoose(stateChoose);
    }, [stateChoose]);

    const closeModal = () => {
        handleCloseModal();
        setlistChoose(stateChoose);
    }

    const handleChoose = (idProduct) => {
        if(listChoose.indexOf(idProduct) === -1)
            setlistChoose([...listChoose, idProduct]);
        else 
            setlistChoose(listChoose.filter(id => id !== idProduct));
    }

    const handleSubmit = () => {
        const action = setAllProduct(listChoose);
        dispacth(action);
        handleCloseModal();
    }    

    return (
        <div className={isShow ? 'modal-open' : 'modal-open hidden'}>
            <div className="category-modal-bg">
                <div className={isShow ? 'category-modal': 'category-modal cancel'}>
                    <div className="category__info">
                        <header className="category-modal-title">
                            <h1>Thêm sản phẩm vào bộ sưu tập</h1>
                            <div className="btn-close-modal" onClick={() => closeModal()}>
                                <i className="fal fa-times-circle"></i>
                            </div>
                        </header>
                        <section className="category-modal-content">
                        <ModalSearch />
                        <ModalListView handleChoose={handleChoose} isShow={isShow}/>
                        </section>
                        <div className="category-modal-footer">
                            <ModalControl handleCloseModal={handleCloseModal} handleSubmit={handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


ModalListProduct.propTypes = {

};


export default ModalListProduct;
