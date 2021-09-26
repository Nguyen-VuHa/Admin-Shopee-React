import ProductListView from 'features/Products/components/ProductListView';
import ProductViewControl from 'features/Products/components/ProductViewControl';
import ProductViewItem from 'features/Products/components/ProductViewItem';
import { productsSelectors } from 'features/Products/productSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import './product_view.scss';

const ProductView = () => {
    const allProduct = useSelector(productsSelectors.selectAll);

    const renderProduct = (allProduct) => {
        var result = null;
        if(allProduct.length > 0)
        {
            result = allProduct.map((product, index) => {
                return  <ProductViewItem 
                            key={index} 
                            product={product}
                        />
            })
        }
        else {
            result = <li className="item-table not-product">
                        <h3>Không có sản phẩm nào trong kho</h3>
                    </li>
        }
        return result;
    }
    return (
        <div className="product-view">
                <ProductViewControl />
                <div className="pd-content">
                    <ul className="pd-content__list"> 
                        <li className="item-list">
                            <div className="item__filter"></div>
                        </li>
                        <li className="item-list list-header">
                            <div className="item-list__header">
                                <div className="dyamic-width">
                                    <div className="pd-name">Tên sản phẩm</div>
                                </div>
                                <div className="static-width">
                                    <div className="pd-hd pd-sku">Mã Sản Phẩm</div>
                                    <div className="pd-hd pd-price">Giá</div>
                                    <div className="pd-hd pd-inventory">Tồn kho</div>
                                    <div className="pd-hd pd-option"></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ProductListView>
                            { renderProduct(allProduct) }
                    </ProductListView>
                </div>
        </div>
    );
};


ProductView.propTypes = {

};


export default ProductView;
