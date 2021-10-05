import { unwrapResult } from '@reduxjs/toolkit';
import ModalLoading from 'components/ModalLoading';
import { ToastContext } from 'context/toastContext';
import { getByIdCategory, newCategory, removeAllCateUpdate, updateCategory } from 'features/Categories/categorySlice';
import EditCategoryControl from 'features/Categories/components/EditCategoryControl';
import EditCategoryForm from 'features/Categories/components/EditCategoryForm';
import EditCategoryList from 'features/Categories/components/EditCategoryList';
import ModalListProduct from 'features/Categories/components/ModalListProdut';
import { removeAll } from 'features/Categories/components/ModalListProdut/modalSlice';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import isByLength from 'validator/lib/isByteLength';
import isEmpty from 'validator/lib/isEmpty';
import './edit_category.scss';

const EditCategory = () => {
    const [isShow, setisShow] = useState(false);
    const [isShowModal, setisShowModal] = useState(false);
    const [nameCategory, setnameCategory] = useState('');
    const [imgBase64, setimgBase64] = useState('');
    const [validateMsg, setValidateMsg] = useState({
        msg: {
            nameProduct: '',
        }
    });
    const {state, dispatch} = useContext(ToastContext);

    const listChoose = useSelector((state) => state.modalProduct);
    const disPatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        if(Object.keys(params).length !== 0)
        {
            const action = getByIdCategory(params.idCategory);
            disPatch(action);
        }
    }, [params]);

    const handleOpenModal = () => {
        setisShow(true);
    }

    const handleCloseModal = () => {
        setisShow(false);
    }

    const handleCloseForm = () => {
        history.push('/dashboard/categories');
    }

    const handleSubmitForm = () => {
        if(Object.keys(params).length !== 0)
        {
            handleUpdateCategory();
        }
        else {
            handleNewCategory();
        }
    }

    const handleNewCategory = async () => {
        const valid = validateCategory(nameCategory);
        if(valid) {
            setisShowModal(true);
            const action = newCategory({
                nameCategory,
                imageCategory: imgBase64,
                listProduct: listChoose,
            })
            const result = await disPatch(action);
            const messageResult = unwrapResult(result);
            if(messageResult.warning){
                setisShowModal(false);
                dispatch({
                    type: 'ADD_NOTIFICATION',
                    payload: {
                        id: uuidv4(),
                        type: "WARNING",
                        title: "Warning!",
                        message: messageResult.message,
                        position: "top-right",
                    }
                })
                return;
            }
            else {
                setisShowModal(false);
                dispatch({
                    type: 'ADD_NOTIFICATION',
                    payload: {
                        id: uuidv4(),
                        type: "SUCCESS",
                        title: "Successfully!",
                        message: "Bộ sưu tập đã được lưu lại!",
                        position: "top-right",
                    }
                });
                disPatch(removeAll());
                history.push('/dashboard/categories');
            }
        }
        else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }

    const handleUpdateCategory = async () => {
        const valid = validateCategory(nameCategory);
        if(valid) {
            setisShowModal(true);
            const action = updateCategory({
                idCategory: params.idCategory,
                nameCategory,
                imageCategory: imgBase64,
                listProduct: listChoose,
            })
            const result = await disPatch(action);
            const messageResult = unwrapResult(result);
            if(messageResult.status = 'OK')
            {
                disPatch(removeAllCateUpdate());
                disPatch(removeAll());
                setisShowModal(false);
                dispatch({
                    type: 'ADD_NOTIFICATION',
                    payload: {
                        id: uuidv4(),
                        type: "SUCCESS",
                        title: "Successfully!",
                        message: "Cập nhật bộ sưu tập thành công!",
                        position: "top-right",
                    }
                });
                history.push('/dashboard/categories');
            }
        }
        else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }

    const validateCategory = (nameCategory) => {
        const msg = {};

        if(isEmpty(nameCategory)) {
            msg.name = "Tên bộ sưu tập không được trống!"
        } else if(isByLength(nameCategory, 50)) {
            msg.name = "Tên bộ sưu tập không được quá dài (dưới 50 ký tự)!"
        }

        setValidateMsg(msg);
        if(Object.keys(msg).length > 0) return false;

        return true;
    }
    
    return (
        <>
            <ModalLoading isShowModal={isShowModal}/>
            <ModalListProduct isShow={isShow} handleCloseModal={handleCloseModal}/>
            <form className="edit-category">
                <div className="edit-category__content content">
                    <div className="content__left">
                        <div className="content-l__header">
                            <div className="hd__title">
                                <div className="title">Sản phẩm trong bộ sưu tập</div>
                                <span>{ listChoose.length }</span>
                            </div>
                            {listChoose.length > 0  ?  <div className="btn btn-hd-add" onClick={() => handleOpenModal()}>
                                                            <i className="fal fa-plus"></i>
                                                            Thêm sản phẩm
                                                        </div>
                            : ''}
                        </div>
                        <div className="content__wrapper">
                           <EditCategoryList handleOpenModal={handleOpenModal}/>
                        </div>
                    </div>
                    <div className="content__right">
                        <EditCategoryForm 
                            nameCategory={nameCategory}
                            setnameCategory={setnameCategory} 
                            setimgBase64={setimgBase64}
                            imgBase64={imgBase64}
                            validateMsg={validateMsg}
                        />
                    </div>
                </div>
                <div className="edit-category__footer">
                    <EditCategoryControl handleCloseForm={handleCloseForm} handleSubmitForm={handleSubmitForm}/>
                </div>
            </form>
        </>
    );
};


EditCategory.propTypes = {

};


export default EditCategory;
