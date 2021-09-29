import { categoriesSelectors } from 'features/Categories/categorySlice';
import CategoryListView from 'features/Categories/components/CategoryListView';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './category_view.scss';

const CategoryView = () => {
    const stateCategory = useSelector(categoriesSelectors.selectAll);

    return (
       <div className="category-view">
            <div className="category-view__header header">
                <div className="header__left">
                    <div>Bộ Sưu Tập</div>
                    <span>{ stateCategory.length }</span>
                </div>
                <div className="header__right">
                    <Link to="/dashboard/categories" className="btn btn-primary btn-user btn-block">
                        <i className="fal fa-plus mr-3"></i>
                        Bộ sưu tập mới
                    </Link>
                </div>
            </div>
            <CategoryListView />
        </div>
    );
};


CategoryView.propTypes = {

};


export default CategoryView;
