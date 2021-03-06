import { productUpdateSelectors } from 'features/Products/productSlice';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import EditProductControl from '../EditProductControl';

const EditProductForm = (props) => {
    const stateProduct = useSelector(productUpdateSelectors.selectAll);
    const { handleSaveProduct, validateMsg } = props;
    const [price, setPrice] = useState(0);
    const [checked, setChecked] = useState(1);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const params = useParams();

    useEffect(() => {
        if(params.idProduct && stateProduct.length > 0)
        {
            setName(stateProduct[0].nameProduct);
            setPrice(stateProduct[0].price);
            setChecked(stateProduct[0].status);
            setDescription(stateProduct[0].descProduct);
        }
    }, [stateProduct]);

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
                validateMsg.description= ''
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
        var objData = {};
        if(params.idProduct) {
            objData = {
                idProduct: params.idProduct,
                name,
                price,
                description,
                checked
            }
        }
        else {
            objData = {
                name,
                price,
                description,
                checked
            }
        }
        handleSaveProduct(objData);
    }

    return (
        <>
            <div className="edit-product__form form">
                <div className="form__header">
                    <h4>Th??ng tin s???n ph???m</h4>
                </div>
                <div className="form__content">
                    <div className="row row-space">
                        <div className="col-6">
                            <div className="input-group">
                                <label className="label">T??n S???n Ph???m</label>
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
                                <label className="label">Gi?? </label>
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
                                <label className="label">Tr???ng Th??i</label>
                                <div className="warrap-status mt-2">
                                    <label className="radio-container mr-4">
                                        <input 
                                            type="radio" value={1} checked={checked === 1 ? true : false} 
                                            onChange={(e) => handleChangeStatus(e)} name="status"
                                        />
                                        C??n H??ng
                                        <span className="checkmark mr-2"></span>
                                    </label>
                                    <label className="radio-container">
                                        <input 
                                            type="radio" value={0} checked={checked === 0 ? true : false} 
                                            onChange={(e) => handleChangeStatus(e)}  name="status"
                                        />
                                        H???t H??ng
                                        <span className="checkmark mr-2"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* --------------------------- */}
                        <div className="col-9"> 
                            <div className="input-group">
                                <label className="label">M?? t??? s???n ph???m</label>
                                <textarea  
                                    className={validateMsg.description ? "input--style-4 is-invalid" : "input--style-4"} type="text" 
                                    name="description" autoComplete="off"
                                    style={{minHeight: '400px', lineHeight: '30px', paddingTop: '10px'}}
                                    value={description}
                                    onChange={(e) => handleChangeText(e)}
                                />
                                <small className="invalid-feedback">{validateMsg.description ? validateMsg.description : ''}</small>
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
