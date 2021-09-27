import Title from 'constants/title_global';
import EditProductForm from 'features/Products/components/EditProductForm';
import EditProductPhoto from 'features/Products/components/EditProductPhoto';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import './edit_product.scss';
import productApi from 'api/productApi';

import isEmpty from 'validator/lib/isEmpty';
import isByLength from 'validator/lib/isByteLength';
import { useSelector } from 'react-redux';
import { ToastContext } from 'context/toastContext';
import {v4 as uuidv4} from 'uuid';

const EditProduct = () => {
    const [validateMsg, setValidateMsg] = useState('');
    const {state, dispatch} = useContext(ToastContext);
    const listImage = useSelector((state) => state.imgProduct);

    const handleSaveProduct = async (objData) => {
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
                    message: "Cần có ít nhất 1 hình ảnh cho sản phẩm!"
                }
            })
            return;
        }
        if(isValid) {
            var dataPost = {
                data: objData,
                arrayImage: listImage
            }
            const result = await productApi.newProduct(dataPost);
            console.log(result);
        }
       
    }

    const validateAll = (objData) => {
        const msg = {};

        if(isEmpty(objData.name)) {
            msg.name = "Tên sản phẩm không được để trống!"
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
            msg.description = "Mô tả sản phẩm không được vượt quá 3000 ký tự!"
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
