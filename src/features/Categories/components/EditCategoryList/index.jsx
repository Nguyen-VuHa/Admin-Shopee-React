import { categoryUpdateSelectors } from 'features/Categories/categorySlice';
import { productsSelectors } from 'features/Products/productSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditCategoryItem from '../EditCategoryItem';
import { setAllProduct } from '../ModalListProdut/modalSlice';


const EditCategoryList = (props) => {
    const { handleOpenModal } = props;
    const listChoose = useSelector((state) => state.modalProduct);
    const stateProdut = useSelector(productsSelectors.selectAll);
    const categoryById = useSelector(categoryUpdateSelectors.selectAll);
    const disPatch = useDispatch();

    useEffect(() => {
        if(categoryById.length > 0) {
            var product = categoryById[0]?.SANPHAMs.map(item => {
                return item.idProduct;
            })
            const action = setAllProduct(product);
            disPatch(action);
        };
    }, [categoryById]);
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
