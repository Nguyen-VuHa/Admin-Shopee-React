import React, { useState, useRef } from 'react';

const EditCategoryForm = (props) => {
    const { nameCategory, setnameCategory, imgBase64, setimgBase64, validateMsg } = props;
    const [files, setFiles] = useState('');
    const inputRef = useRef();

    const handleChangeInput = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        switch (name) {
            case 'nameCategory':
                validateMsg.name = '';
                setnameCategory(value);
                break;
            case 'files':
                let files = e.target.files;
                if(files.length !== 0)
                {
                    let reader = new FileReader();
                    reader.readAsDataURL(files[0]);
                    reader.onload = (e) => {
                        setimgBase64(e.target.result);
                    }
                    setFiles(e.target.value);
                }   
                break;
            default:
                break;
        }
    }

    const handleOpenDialog = () => {
        inputRef.current.click();
    }

    const handleChangeImage = () => {
        inputRef.current.click();
    }

    const handleRemoveImage = () => {
        setimgBase64('');
        setFiles('');
    }

    return (
        <div className="content__info" >
            <div className="content-r__header">
                <div className="title">Thông tin bộ sưu tập</div>
            </div>
            <div className="content-r__body">
                <div className="form-row">
                    <label>Tên bộ sưu tập</label>
                    <input 
                        autoComplete="off" 
                        className={validateMsg.name ? "name-category is-invalid" : "name-category"} 
                        type="text" name="nameCategory" 
                        value={nameCategory}
                        onChange={(e) => handleChangeInput(e)}
                        />
                    <small className="invalid-feedback">{ validateMsg.name }</small>
                </div>
                <div className="form-row">
                    <label>Hình ảnh bộ sưu tập</label>
                    <div 
                        className="media-button mt-2" 
                        onClick={imgBase64 ? null : ()=> handleOpenDialog()}
                    >
                        {imgBase64 ? 
                            <>
                                <div className="bg-body">
                                    <img src={imgBase64} className="image" alt="NotImage"/>
                                </div> 
                                <div className="shadow"></div>
                                <div className="group-btn">
                                    <div
                                        className="btn-circle btn-option btn-update" 
                                        onClick={() => handleChangeImage()}
                                    >
                                        <i className="fal fa-sync-alt"></i>
                                    </div>
                                    <div 
                                        className="btn-circle btn-option btn-remove" 
                                        onClick={() => handleRemoveImage()}
                                    >
                                        <i className="fal fa-trash-alt"></i>
                                    </div>
                                </div>
                            </>
                            :<span className="placeholder">
                                    <i className="fal fa-plus"></i>
                            </span>
                        }
                    </div>
                    <input 
                        ref={inputRef}
                        type="file" 
                        className="choose-image" 
                        hidden 
                        name="files"
                        value={files}
                        onChange={(e) => handleChangeInput(e)}
                    />
                </div>
            </div>
        </div>
    );
};


EditCategoryForm.propTypes = {

};


export default EditCategoryForm;
