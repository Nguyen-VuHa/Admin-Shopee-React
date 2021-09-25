import React, { useState } from 'react';


const SearchControl = () => {

    const [search, setSearch] = useState('');

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input 
                    type="text" className="form-control bg-light border-0 small" 
                    placeholder="Search for..."
                    aria-label="Search" aria-describedby="basic-addon2" 
                    name="search"
                    value={search}
                    onChange={(e) => handleInputChange(e)}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </div>
        </form>
    );
};


SearchControl.propTypes = {

};


export default SearchControl;
