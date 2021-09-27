import React from 'react';
import { useSelector } from 'react-redux';
import EditProductPhotoItem from '../EditProductPhotoItem';


const EditProductPhoto = () => {
    const dataImage = useSelector((state) => state.imgProduct);

    console.log(dataImage);

    return (
        <div className="edit-product__photo photo">
            <div className="photo__header">
                <h4>Hình ảnh sản phẩm</h4>
            </div>
            <div className="photo__content">
                <EditProductPhotoItem dataBase64={dataImage[0] ? dataImage[0] : ''}/>
                <EditProductPhotoItem dataBase64={dataImage[1] ? dataImage[1] : ''}/>
                <EditProductPhotoItem dataBase64={dataImage[2] ? dataImage[2] : ''}/>
                <EditProductPhotoItem dataBase64={dataImage[3] ? dataImage[3] : ''}/>
                <EditProductPhotoItem dataBase64={dataImage[4] ? dataImage[4] : ''}/>
            </div>
        </div>
    );
};


EditProductPhoto.propTypes = {

};


export default EditProductPhoto;
