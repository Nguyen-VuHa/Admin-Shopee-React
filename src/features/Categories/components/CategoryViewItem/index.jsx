import React from 'react';

const CategoryViewItem = (props) => {
    const { isTooltip, handleToggleControl, data } = props;

    const handleOpenOption = (e) => {
        handleToggleControl(e);
    }
    return (
        <div className="card-box">
            <div className="card-bg">
                { data.urlImage ?  <img src={data.urlImage} alt="NotImage"/> : ''}
            </div>
            <div className="card-shadow"></div>
            <div className="card-content">
                <div className="name-collection">
                    {data.nameCategory}
                </div>
                <span className="count-collection">
                    {data.countProduct}
                </span>
            </div>
            <div className={isTooltip ? 'card-option active': 'card-option'}>
                <div className="btn-circle btn-option" onClick={(e) => handleOpenOption(e)}>
                    <i className="far fa-ellipsis-h"></i>
                    <div id="options" className={isTooltip ? 'content-option active': 'content-option'}>
                        <ul className="list-option">
                            <li 
                                className="item-option item-update" 
                            >
                                <i className="fal fa-edit"></i>
                                Chỉnh sửa
                            </li>
                            <li 
                                className="item-option item-remove" 
                            >
                                <i className="fal fa-trash-alt"></i>
                                Xóa
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


CategoryViewItem.propTypes = {

};


export default CategoryViewItem;
