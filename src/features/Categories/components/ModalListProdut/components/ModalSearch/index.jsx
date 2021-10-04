import React from 'react';

const ModalSearch = () => {
    return (
        <div className="search-category mb-3">
            <i className="fal fa-search"></i>
            <form className="search-wrapper">
                <input 
                    autoComplete="off"
                    type="text" 
                    name="searchCategory" 
                    placeholder="Tìm kiếm sản phẩm theo tên..." 
                    // value={searchCategory} 
                    // onChange={(e) => handleChangeSearch(e)}
                />
            </form>
            {/* {searchCategory ? 
                <div className="btn-remove" onClick={() => onRemoveText()}>
                    <i className="fal fa-times-circle"></i>
                </div> : ''
            }             */}
                <div 
                    className="btn-remove" 
                    // onClick={() => onRemoveText()}
                >
                    <i className="fal fa-times-circle"></i>
                </div>
        </div>
    );
};


ModalSearch.propTypes = {

};


export default ModalSearch;
