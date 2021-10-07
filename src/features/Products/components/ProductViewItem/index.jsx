import { updateStatus } from 'features/Products/productSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ProductViewItem = (props) => {
    const { product } = props;
    const dispatch = useDispatch();
    const history = useHistory();
    const token = localStorage.getItem('accessToken');

    const handleChangeStatus = () => {
        if(token) {
            var ObjUpdate = {
                status: (product.status === 1 ? 0 : 1),
            }
            dispatch(updateStatus({
                idProduct: product.idProduct,
                ObjUpdate,
                token,
            }));
        }
       
    }

    const handleUpdatePage = () => {
        history.push(`/dashboard/product/${product.idProduct}`);
    }

    return (
        <li className="item-table">
            <div className="dyamic-width">
                <div className="context-name">
                    <div className="pd-img">
                        <img src={product?.HINHANH_SANPHAMs[product?.HINHANH_SANPHAMs.length - 1]?.imageUrl} alt="NotImage"/>
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
                    <div 
                        className="btn-info btn-circle"
                        onClick={() => handleUpdatePage()}
                    >
                        <i className="fal fa-edit edit"></i>
                    </div>
                    <div className="btn-danger btn-circle ml-3">
                        <i className="fal fa-trash-alt remove"></i>
                    </div>
                    
                </div>
            </div>
        </li>
    );
};


ProductViewItem.propTypes = {

};


export default ProductViewItem;
