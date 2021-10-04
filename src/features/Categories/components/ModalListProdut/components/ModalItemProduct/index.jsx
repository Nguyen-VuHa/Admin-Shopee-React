import React, { useEffect, useState } from 'react';

const ModalItemProduct = (props) => {
    const { data, handleChoose, checked, isShow} = props;
    const [isChecked, setisChecked] = useState(checked);
    

    useEffect(() => {
        setisChecked(checked);
    }, [isShow]);

    const handleToggleChecked = () => {
        setisChecked(!isChecked);
        handleChoose(data.idProduct);
    }
    
    return (
        <li className="product-row" 
            onClick={() => handleToggleChecked()}
        >
            <div className="wrapper">
                <div className="media-container">
                    <img src={data?.HINHANH_SANPHAMs[data?.HINHANH_SANPHAMs.length - 1]?.imageUrl} alt="NotImage"/>
                </div>
                <span>{data?.nameProduct}</span>
                <div className="checkbox">
                    <label>
                        <span className={isChecked ? "checkbox-inner checked" : "checkbox-inner"}>
                            <i className="fas fa-check"></i>
                        </span>
                    </label>
                </div>
            </div>
        </li>
    );
};


ModalItemProduct.propTypes = {

};


export default ModalItemProduct;
