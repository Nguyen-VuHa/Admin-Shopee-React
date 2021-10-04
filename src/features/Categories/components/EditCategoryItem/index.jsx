import React from 'react';
import { useDispatch } from 'react-redux';
import { removeOneProduct } from '../ModalListProdut/modalSlice';

const EditCategoryItem = (props) => {
    const { data, index } = props;
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        const action =  removeOneProduct(data.idProduct);
        dispatch(action);   
    }

    return (
        <div className="ct-body__card" >
            <div className="card-header">
                <span className="index">{ index + 1 }</span>
                <div className="btn-circle btn-remove" onClick={() => handleRemoveItem()}>
                    <i className="fal fa-times"></i>
                </div>
            </div>
            <div className="card-bg">
                <img src={data?.HINHANH_SANPHAMs[data?.HINHANH_SANPHAMs.length - 1]?.imageUrl} alt="NotImage"/>
            </div>
            <div className="card-shadow"></div>
            <div className="card-info">
                <div className="name-product">
                    {data.nameProduct}
                </div>
            </div>
        </div>
    );
};


EditCategoryItem.propTypes = {

};


export default EditCategoryItem;
