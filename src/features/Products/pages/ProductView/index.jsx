import Title from 'constants/title_global';
import ProductListView from 'features/Products/components/ProductListView';
import ProductViewControl from 'features/Products/components/ProductViewControl';
import ProductViewItem from 'features/Products/components/ProductViewItem';
import { productsSelectors } from 'features/Products/productSlice';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import './product_view.scss';

const ProductView = () => {
    const allProduct = useSelector(productsSelectors.selectAll);
    
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

    const renderProduct = (allProduct) => {
        var result = null;
        if(allProduct.length > 0)
        {
            result = allProduct.map((product) => {
                return  <ProductViewItem 
                            key={product.idProduct} 
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
        <>
            <Helmet>
                <title>{ Title.TITLE_PRODUCT_VIEW }</title> 
                <meta name="description" content="Helmet application" />
            </Helmet>
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
        </>
      
    );
};


ProductView.propTypes = {

};


export default ProductView;
