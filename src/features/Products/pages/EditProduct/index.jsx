import { unwrapResult } from '@reduxjs/toolkit';
import ModalLoading from 'components/ModalLoading';
import Title from 'constants/title_global';
import { ToastContext } from 'context/toastContext';
import EditProductForm from 'features/Products/components/EditProductForm';
import EditProductPhoto from 'features/Products/components/EditProductPhoto';
import { getProductById, newProduct, productUpdateSelectors, updateProduct } from 'features/Products/productSlice';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import isByLength from 'validator/lib/isByteLength';
import isEmpty from 'validator/lib/isEmpty';
import './edit_product.scss';
import { removeAllImageBs64, setImageUpdate } from './imgProductSlice';


const EditProduct = () => {
   const stateProduct = useSelector(productUpdateSelectors.selectAll);
    const [isShowModal, setisShowModal] = useState(false);
    const [validateMsg, setValidateMsg] = useState({
        msg: {
            name: '',
            price: '',
            description: '',
        }
    });
    const {state, dispatch} = useContext(ToastContext);
    
    const listImage = useSelector((state) => state.imgProduct);
    const disPatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        if(params.idProduct)
        {
            disPatch(getProductById(params.idProduct));
        }
    }, [params, disPatch]);

    useEffect(() => { 
        if(params.idProduct)
        { 
            if(stateProduct[0]?.HINHANH_SANPHAMs)
            {
                var objImg = [];
                for(var i = 0; i <  stateProduct[0].HINHANH_SANPHAMs.length; i++)
                {
                    objImg.push(stateProduct[0].HINHANH_SANPHAMs[i].imageUrl);
                }
                disPatch(setImageUpdate(objImg));
            }
        }
    }, [stateProduct]);
    
   

    const handleSaveProduct = (objData) => {
        if(params.idProduct) {
            handleUpdateProduct(objData);
        }
        else {
            handleNewProduct(objData);
        }
     
    }

    const handleNewProduct = async (objData) => {
        const isValid = validateAll(objData);
        if(listImage.length === 0){
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            dispatch({
                type: 'ADD_NOTIFICATION',
                payload: {
                    id: uuidv4(),
                    type: "INFO",
                    title: "Thông báo!",
                    message: "Cần có ít nhất 1 hình ảnh cho sản phẩm!",
                    position: "top-right",
                }
            })
            return;
        }
        if(isValid) {
            setisShowModal(true);
            var dataPost = {
                data: objData,
                arrayImage: listImage
            }
            const action = newProduct(dataPost);
            var result = await disPatch(action);
            var messageResult = unwrapResult(result);

            if (messageResult.status === 'OK') {
                setisShowModal(false);
                dispatch({
                    type: 'ADD_NOTIFICATION',
                    payload: {
                        id: uuidv4(),
                        type: "SUCCESS",
                        title: "Successfully!",
                        message: "Sản phẩm đã được thêm thành công!",
                        position: "top-right",
                    }
                })
                disPatch(removeAllImageBs64());
                history.push('/dashboard/product/view');
            }
            else {
                setisShowModal(false);
                dispatch({
                    type: 'ADD_NOTIFICATION',
                    payload: {
                        id: uuidv4(),
                        type: "WARNING",
                        title: "Cảnh báo!",
                        message: messageResult.message,
                        position: "top-right",
                    }
                })
            }
            
        }
    }

    const handleUpdateProduct = async (objData) => {
        const isValid = validateAll(objData);
        if(listImage.length === 0){
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            dispatch({
                type: 'ADD_NOTIFICATION',
                payload: {
                    id: uuidv4(),
                    type: "INFO",
                    title: "Thông báo!",
                    message: "Cần có ít nhất 1 hình ảnh cho sản phẩm!",
                    position: "top-right",
                }
            })
            return;
        }
        if(isValid) {
            setisShowModal(true);
            var dataPost = {
                data: objData,
                arrayImage: listImage
            }

            const action = updateProduct(dataPost);
            var result = await disPatch(action);
            var messageResult = unwrapResult(result);

            if (messageResult.stateReponse.status === 'OK') {
                setisShowModal(false);
                dispatch({
                    type: 'ADD_NOTIFICATION',
                    payload: {
                        id: uuidv4(),
                        type: "SUCCESS",
                        title: "Successfully!",
                        message: "Cập nhật sản phẩm thành công!",
                        position: "top-right",
                    }
                })
                disPatch(removeAllImageBs64());
                history.push('/dashboard/product/view');
            }
            else {
                setisShowModal(false);
                dispatch({
                    type: 'ADD_NOTIFICATION',
                    payload: {
                        id: uuidv4(),
                        type: "WARNING",
                        title: "Cảnh báo!",
                        message: messageResult.message,
                        position: "top-right",
                    }
                });
            }
            
        }
    }

    const validateAll = (objData) => {
        const msg = {};

        if(isEmpty(objData.name)) {
            msg.name = "Tên sản phẩm không được để trống!"
        } else if(isByLength(objData.name, 120)) {
            msg.name = "Tên sản phẩm không vượt quá 120 ký tự!"
        }

        if(isEmpty(objData.price.toString())) {
            msg.price = "Giá không được để trống!"
        }
        else if(isByLength(objData.price.toString(), 9)) {
            msg.price = "Giá đã vượt quá 999.999.999 đ"
        }

        if(isEmpty(objData.description)) {
            msg.description = "Mô tả sản phẩm không được để trống!"
        } else if(isByLength(objData.description, 3000)) {
            msg.description = "Mô tả sản phẩm không vượt quá 3000 ký tự!"
        }

        setValidateMsg(msg);
        if(Object.keys(msg).length > 0) return false;

        return true;
    }

    return (
        <>
            <Helmet>
                <title>{ Title.TITLE_EDIT_PRODUCT }</title> 
                <meta name="description" content="Helmet application" />
            </Helmet>
            <ModalLoading isShowModal={isShowModal}/>
            <form className="edit-product">
                <EditProductPhoto />
                <EditProductForm handleSaveProduct={handleSaveProduct} validateMsg={validateMsg}/>
            </form>
        </>
       
    );
};


EditProduct.propTypes = {

};


export default EditProduct;
