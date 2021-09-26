import React from 'react';

const ProductListView = (props) => {
    return (
        <div data-simplebar style={{width: '100%', maxHeight: '500px'}}>
            <ul className="pd-content__table">
                { props.children }
            </ul>
        </div>
          
    );
};


ProductListView.propTypes = {

};


export default ProductListView;
