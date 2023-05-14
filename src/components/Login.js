import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// styles
import styles from "./SignUp.module.css"

// functions
import { validate } from './validate';
import { notify } from './toast';

const Login = () => {

 

    const[data,setData] = useState({
       
        email: '',
        password: '',
       
    })
    const[errors,setErrors] = useState({});
    const[touched,setTouched] = useState({});

    useEffect(() =>{
        setErrors(validate(data,"login"));
    },[data,touched])


    const changeHandler = event => {
            setData({...data, [event.target.name]: event.target.value})
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    const submitHandler = event => {
        event.preventDefault();
            if (!Object.keys(errors).length){
                notify("You Loged in successfully", "success")
            }else{
                notify("invalid data" ,"error")
                setTouched({
                     email: true,
                     password: true,
                })
            }    
    }




    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input type="email" name='email' value={data.email}  onChange={changeHandler} onFocus={focusHandler}
                    className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}/>
                    {errors.email && touched.email && <span>{errors.email} </span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input type="password" name='password' value={data.password}  onChange={changeHandler} onFocus={focusHandler}
                    className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}/>
                    {errors.password && touched.password && <span>{errors.password} </span>}
                </div>
             
                <div className={styles.formButtons}>
                    <Link to='/Signup'>SignUp</Link>
                    <button type='submit'>Login</button>

                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;