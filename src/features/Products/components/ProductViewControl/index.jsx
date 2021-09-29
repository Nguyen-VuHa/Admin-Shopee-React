import { removeAllImageBs64 } from 'features/Products/pages/EditProduct/imgProductSlice';
import { productsSelectors, removeProductUpdate } from 'features/Products/productSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductViewControl = () => {
    const totalProduct = useSelector(productsSelectors.selectTotal);
    const dispatch = useDispatch();

    const handleNewProduct = () => {
        dispatch(removeProductUpdate());
        dispatch(removeAllImageBs64());
    }
    
    return (
        <div className="pd-header">
            <div className="pd-left">
                <div>Sản Phẩm</div>
                <span>{totalProduct}</span>
            </div>
            <div className="pd-right">
                <Link 
                    to="/dashboard/product/new-product" 
                    className="btn btn-primary btn-user btn-block"
                    onClick={() => handleNewProduct()}
                >
                    <i className="fal fa-plus mr-3"></i>
                    Thêm sản phẩm
                </Link>
            </div>
        </div>
    );
};


ProductViewControl.propTypes = {

};


export default ProductViewControl;
