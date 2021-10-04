import { QuestionContext } from 'context/questionContext';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';

const CategoryViewItem = (props) => {
    const { data, handleRemoveCategory } = props;
    const {state, dispatch} = useContext(QuestionContext);
    const [isToolTip, setisToolTip] = useState(false);
    const outSideRef = useRef(null);
    const history = useHistory();

    const handleOpenOption = () => {
        setisToolTip(true);
    }   

    useEffect(() => {
        if(isToolTip) {
            function handleClickOutside(event) {
                if (outSideRef.current && !outSideRef.current.contains(event.target)) {
                    setisToolTip(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [outSideRef, isToolTip]);

    const handleDeleteItem = async () => {
        dispatch({
            type: 'ADD_QUESTION',
            payload: {
                type: 'DELETE',
                question: 'Bạn có chắc chắn muốn xóa ?',
                messageWarning: 'Nếu bạn chắc chắn nhấn Delete để xóa.',
                status: true,
            }
        });
        handleRemoveCategory(data.idCategory);
    }

    const handleClickUpdate = () => {
        history.push(`/dashboard/categories/${data.idCategory}`);
    }

    return (
        <div className="card-box">
            <div className="card-bg">
                { data.urlImage ?  <img src={data.urlImage} alt="NotImage"/> : ''}
            </div>
            <div className="card-shadow"></div>
            <div className="card-content">
                <div className="name-collection">
                    {data.nameCategory}
                </div>
                <span className="count-collection">
                    {data.countProduct}
                </span>
            </div>
            <div className={isToolTip ? 'card-option active': 'card-option'}>
                <div className="btn-circle btn-option" onClick={() => handleOpenOption()}>
                    <i className="far fa-ellipsis-h"></i>
                    <div
                        className={isToolTip ? 'content-option active': 'content-option'}
                        ref={outSideRef}
                    >
                        <ul className="list-option">
                            <li 
                                className="item-option item-update" 
                                onClick={() => handleClickUpdate()}
                            >
                                <i className="fal fa-edit"></i>
                                Chỉnh sửa
                            </li>
                            <li 
                                className="item-option item-remove" 
                                onClick={() => handleDeleteItem()}
                            >
                                <i className="fal fa-trash-alt"></i>
                                Xóa
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


CategoryViewItem.propTypes = {

};


export default CategoryViewItem;
