import { unwrapResult } from '@reduxjs/toolkit';
import { QuestionContext } from 'context/questionContext';
import { categoriesSelectors, deleteCategory } from 'features/Categories/categorySlice';
import { productsSelectors } from 'features/Products/productSlice';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryViewItem from '../CategoryViewItem';

const CategoryListView = () => {
    const stateCategory = useSelector(categoriesSelectors.selectAll);
    const stateProduct = useSelector(productsSelectors.selectAll);
    const [idCategory, setidCategory] = useState('');
    const {state, dispatch} = useContext(QuestionContext);
    const disPatch = useDispatch();

    const handleRemoveCategory = (idCategory) => {
        setidCategory(idCategory);
    }

    useEffect(() => {
        async function removeCategory(idCategory) {
            const action = deleteCategory(idCategory);
            await disPatch(action);
        }

        if(state.submit) {
            removeCategory(idCategory);
        }
    }, [state]);

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
            </div>
            { stateCategory && stateCategory.map((data, index) => {
                return <CategoryViewItem 
                            key={data.idCategory}
                            data={data}
                            index={index}
                            handleRemoveCategory={handleRemoveCategory}
                        />
            })}
            <div className="card-box-add">
                <Link to="/dashboard/categories/new-category" >
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
