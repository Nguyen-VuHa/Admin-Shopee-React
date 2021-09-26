import { productsSelectors } from 'features/Products/productSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

const ProductViewControl = () => {
    const match = useRouteMatch();
    const totalProduct = useSelector(productsSelectors.selectTotal);

    return (
        <div className="pd-header">
            <div className="pd-left">
                <div>Sản Phẩm</div>
                <span>{totalProduct}</span>
            </div>
            <div className="pd-right">
                <Link to={`${match.path}/new-product`} className="btn btn-primary btn-user btn-block">
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
