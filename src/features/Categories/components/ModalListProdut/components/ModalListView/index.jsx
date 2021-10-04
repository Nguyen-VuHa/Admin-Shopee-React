import { productsSelectors } from 'features/Products/productSlice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalItemProduct from '../ModalItemProduct';

const ModalListView = (props) => {
    const { handleChoose, isShow } = props;
    const stateProduct = useSelector(productsSelectors.selectAll);
    const listChoose = useSelector((state) => state.modalProduct);

    
    return (
        <div data-simplebar style={{width: '100%', maxHeight: '300px'}}>
            <ul className="product-list">
                { stateProduct.length > 0 ? 
                    stateProduct.map(function(data) {
                        return  <ModalItemProduct 
                            key={data.idProduct} 
                            data={data} handleChoose={handleChoose}
                            checked={listChoose.filter(id => id === data.idProduct).length > 0 ? true : false}
                            isShow={isShow}
                        />
                    })
                : 
                    <li className="product-row-emty ">
                        <h3>Không tìm thấy sản phẩm nào ở đây</h3>
                    </li>
                }
            </ul>
        </div>
    );
};


ModalListView.propTypes = {

};


export default ModalListView;
