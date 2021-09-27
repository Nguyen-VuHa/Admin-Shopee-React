import React, { useState } from 'react';
import EditProductControl from '../EditProductControl';

const EditProductForm = (props) => {
    const { handleSaveProduct, validateMsg } = props;
    const [price, setPrice] = useState(0);
    const [checked, setChecked] = useState(1);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeText = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        switch (name) {
            case 'name':
                validateMsg.name = '';
                setName(value);
                break;
            case 'description':
                validateMsg.description = '';
                setDescription(value);
                break;
            default:
                break;
        }
    }

    const handleRegexChangePrice = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
           setPrice(e.target.value)
           validateMsg.price = '';
        }
    }

    const handleChangeStatus = (e) => {
        const target = e.target;
        setChecked(parseInt(target.value));
    }

    const handleSubmitForm = () => {
        var objData = {
            name,
            price,
            description,
            checked
        }
        handleSaveProduct(objData);
    }

    return (
        <>
            <div className="edit-product__form form">
                <div className="form__header">
                    <h4>Thông tin sản phẩm</h4>
                </div>
                <div className="form__content">
                    <div className="row row-space">
                        <div className="col-6">
                            <div className="input-group">
                                <label className="label">Tên Sản Phẩm</label>
                                <input 
                                    className={validateMsg.name ? "input--style-4 is-invalid" : "input--style-4"} type="text" 
                                    name="name" autoComplete="off"
                                    value={name}
                                    onChange={(e) => handleChangeText(e)}
                                />
                                <small className="invalid-feedback">{validateMsg.name ? validateMsg.name : ''}</small>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-group">
                                <label className="label">Giá </label>
                                <input 
                                    className={validateMsg.price ? "input--style-4 is-invalid" : "input--style-4"} type="text" 
                                    name="price" autoComplete="off"
                                    value={price} 
                                    onChange={(e) => handleRegexChangePrice(e)}
                                />
                                 <small className="invalid-feedback">{validateMsg.price ? validateMsg.price : ''}</small>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-group">
                                <label className="label">Trạng Thái</label>
                                <div className="warrap-status mt-2">
                                    <label className="radio-container mr-4">
                                        <input 
                                            type="radio" value={1} checked={checked === 1 ? true : false} 
                                            onChange={(e) => handleChangeStatus(e)} name="status"
                                        />
                                        Còn Hàng
                                        <span className="checkmark mr-2"></span>
                                    </label>
                                    <label className="radio-container">
                                        <input 
                                            type="radio" value={0} checked={checked === 0 ? true : false} 
                                            onChange={(e) => handleChangeStatus(e)}  name="status"
                                        />
                                        Hết Hàng
                                        <span className="checkmark mr-2"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* --------------------------- */}
                        <div className="col-9"> 
                            <div className="input-group">
                                <label className="label">Mô tả sản phẩm</label>
                                <textarea  
                                    className={validateMsg.description ? "input--style-4 is-invalid" : "input--style-4"} type="text" 
                                    name="description" autoComplete="off"
                                    style={{minHeight: '400px', lineHeight: '30px'}}
                                    value={description}
                                    onChange={(e) => handleChangeText(e)}
                                />
                                <small className="invalid-feedback">{validateMsg.description ? validateMsg.description : ''}</small>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group">
                                <label className="label">Mục thông tin bổ sung</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EditProductControl handleSubmitForm={handleSubmitForm} />
        </>
       
    );
};


EditProductForm.propTypes = {

};


export default EditProductForm;
