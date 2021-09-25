import React, { useState } from 'react';
import FormControl from '../FormControl';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleInputChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }
    return (
        <form className="user">
            <div className="form-group">
                <input 
                    type="email" className="form-control form-control-user"
                    id="exampleInputEmail" aria-describedby="emailHelp"
                    placeholder="Enter Email Address..." 
                    name="email"
                    value={email}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
            <div className="form-group">
                <input 
                    type="password" className="form-control form-control-user"
                    id="exampleInputPassword" placeholder="Password" 
                    name="password"
                    value={password}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox small">
                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                    <label className="custom-control-label" htmlFor="customCheck">Remember
                        Me</label>
                </div>
            </div>
            <FormControl />
        </form>
    );
};


LoginForm.propTypes = {

};


export default LoginForm;
