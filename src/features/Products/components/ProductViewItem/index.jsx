import { updateStatus } from 'features/Products/productSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const ProductViewItem = (props) => {
    const { product } = props;
    const dispatch = useDispatch();

    const handleChangeStatus = () => {
        var ObjUpdate = {
            status: (product.status === 1 ? 0 : 1),
        }
        dispatch(updateStatus({
            idProduct: product.idProduct,
            ObjUpdate
        }));
    }

    return (
        <li className="item-table">
            <div className="dyamic-width">
                <div className="context-name">
                    <div className="pd-img">
                        <img src={product.HINHANH_SANPHAMs[0].imageUrl} alt="NotImage"/>
                    </div>
                    <div className="info-product ml-2">
                        <div className="text-name">
                            {product.nameProduct}
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-width mr-5">
                <div className="pd-hd context-sku">
                    {product.idProduct}
                </div>
                <div className="pd-hd context-price ml-4">
                    {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} đ
                </div>
                <div className="pd-hd context-inventory ml-2">
                    <span 
                        className={product.status === 1 ? 'btn-status bg-success' : 'btn-status bg-danger'} 
                        style={{color: 'white'}}
                        onClick={() => handleChangeStatus()}
                    >
                        {product.status === 1 ? 'Còn Hàng' : 'Hết Hàng'}
                    </span>
                </div>
                <div className="pd-hd context-option">
                    <i className="fal fa-edit edit"></i>
                    <i className="fal fa-trash-alt remove ml-3"></i>
                </div>
            </div>
        </li>
    );
};


ProductViewItem.propTypes = {

};


export default ProductViewItem;
