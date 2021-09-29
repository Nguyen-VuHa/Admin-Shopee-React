import { categoriesSelectors } from 'features/Categories/categorySlice';
import { productsSelectors } from 'features/Products/productSlice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryViewItem from '../CategoryViewItem';

const CategoryListView = () => {
    const [isTooltip, setisTooltip] = useState(false);
    const stateCategory = useSelector(categoriesSelectors.selectAll);
    const stateProduct = useSelector(productsSelectors.selectAll);

    const handleToggleControl = (e) => {
        if(!document.getElementById('options').contains(e.target)) {
            setisTooltip(!isTooltip);
        }
    }

    return (
        <div className="category-view__content">
            <div className="card-box">
                <div className="card-bg">
                    <img src="https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="NotImage"/>
                </div>
                <div className="card-shadow"></div>
                <div className="card-content">
                    <div className="name-collection">
                        Tất cả sản phẩm
                    </div>
                    <span className="count-collection">{stateProduct.length}</span>
                </div>
                <div className="card-option">
                    <div className="btn-circle btn-option">
                        <i className="far fa-ellipsis-h"></i>
                        <div className="group-box content-option">
                            <ul className="list-option">
                                <li className="item-option">
                                    <i className="fal fa-edit"></i>
                                    Chỉnh sửa
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            { stateCategory && stateCategory.map((data) => {
                return <CategoryViewItem 
                            key={data.idCategory}
                            isTooltip={isTooltip} 
                            handleToggleControl={handleToggleControl}
                            data={data}
                        />
            })}
            <div 
                className={isTooltip ? 'tooltip-backdrop active' : 'tooltip-backdrop'}
                onClick={(e) => handleToggleControl(e)}
            ></div>
            <div className="card-box-add">
                <Link to="/dashboard/categories" >
                    <div className="btn-circle btn-add-ct">
                        <i className="fal fa-plus"></i>
                    </div>
                </Link>
            </div>

        </div>
    );
};


CategoryListView.propTypes = {

};


export default CategoryListView;
