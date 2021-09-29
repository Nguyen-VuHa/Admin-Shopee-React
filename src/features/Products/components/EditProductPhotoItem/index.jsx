import { addImageBs64, removeImageBs64 } from 'features/Products/pages/EditProduct/imgProductSlice';
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const EditProductPhotoItem = (props) => {
    const {  dataBase64 } = props;

    const inputFileRef = useRef(null);
    const [imageBase64, setimageBase64] = useState('');
    const [filePath, setfilePath] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setimageBase64(dataBase64);
    }, [dataBase64]);

    const handleChangeInput = (e) => {
        let files = e.target.files;

        if(files.length !== 0)
        {
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = (e) => {
                setimageBase64(e.target.result);
                dispatch(addImageBs64(e.target.result));
            }
            setfilePath(e.target.value);
        }   
    }

    const handleOpenDialog = () => {
        inputFileRef.current.click();
    }

    const handleRemoveImage = () => {
        setimageBase64('');
        setfilePath('');
        dispatch(removeImageBs64(imageBase64));
    }
  
    return (
        <>
            <input 
                type="file" className="choose-image" hidden
                onChange={(e) => handleChangeInput(e)}
                value={filePath}
                ref={inputFileRef}
            />
            <div className="image-pd-update">
                {
                    imageBase64 ?  
                    <>
                        <img className="img-pd" src={imageBase64} alt="NotImage"/>
                        <div 
                            className="btn-close"
                            onClick={() => handleRemoveImage()}
                        >
                            <i className="fal fa-times-circle"></i>
                        </div> 
                    </>
                    :
                    <div className="pd-dialog">
                        <div className="btn-dialog" onClick={() => handleOpenDialog()}>
                            <i className="fal fa-plus"></i>
                        </div>
                    </div> 
                }
            </div>
        </>
    );
};


EditProductPhotoItem.propTypes = {

};


export default EditProductPhotoItem;
