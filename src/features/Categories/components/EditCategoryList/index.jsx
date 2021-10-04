import { productsSelectors } from 'features/Products/productSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import EditCategoryItem from '../EditCategoryItem';


const EditCategoryList = (props) => {
    const { handleOpenModal } = props;
    const listChoose = useSelector((state) => state.modalProduct);
    const stateProdut = useSelector(productsSelectors.selectAll);

    return (
        <>
            {listChoose.length > 0 ?
                <div className="ct-body">
                    { 
                        stateProdut.map(function(data) {
                            return listChoose.filter(id => id === data.idProduct).length > 0 &&
                            <EditCategoryItem 
                                key={data.idProduct} 
                                index={listChoose.findIndex(id => id === data.idProduct)} data={data} 
                            />
                        })
                    }
                </div>  
                :  <div className="content-empty">
                        <h3>Bắt đầu thêm sản phẩm vào bộ sưu tập</h3>
                        <span>Thêm một bộ sưu tập để hiển thị trên trang web của bạn.</span>
                        <div 
                            className="btn btn-primary btn-user btn-block btn-add-pd mt-3"
                            onClick={handleOpenModal}
                        >
                            <i className="fal fa-plus"></i>
                            Thêm sản phẩm
                        </div>  
                        </div>
            }
        </>
    );
};


EditCategoryList.propTypes = {

};


export default EditCategoryList;
