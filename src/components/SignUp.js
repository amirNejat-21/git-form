import React, { useState,useEffect } from 'react';

// functions
import { validate } from './validate';

const SignUp = () => {

    const[data,setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false,
    })
    const[errors,setErrors] = useState({});

    useEffect(() =>{
        setErrors(validate(data));
    },[data])

    const changeHandler = event => {
        if (event.target.name === 'isAccepted') {
            setData({...data, [event.target.name]: event.target.checked})
        }else {
            setData({...data, [event.target.name]: event.target.value})
        }
        console.log(data)
    }

    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>name</label>
                    <input type="text" name='name' value={data.name} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name='email' value={data.email}  onChange={changeHandler}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name='password' value={data.password}  onChange={changeHandler}/>
                </div>
                <div>
                    <label>confirmPassword</label>
                    <input type="password" name='confirmPassword' value={data.confirmPassword}  onChange={changeHandler}/>
                </div>
                <div>
                    <label>i accept terms of privacy policy</label>
                    <input type="checkbox" name='isAccepted' value={data.isAccepted}  onChange={changeHandler}/>
                </div>
                <div>
                    <a href='http'>Login</a>
                    <button type='submit'>SignUp</button>

                </div>
            </form>
        </div>
    );
};

export default SignUp;