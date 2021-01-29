import 'antd/dist/antd.css';
import './Register.css';
import { useEffect, useState } from 'react';
import { Button, Input, Checkbox, Row, Col } from 'antd';
import CinematicLogo from '../../Pics/Cinematic-logo.png';
import * as yup from 'yup';
import Navbar from '../../Components/Navbar/Navbar';
import { useHistory } from "react-router-dom";
import firebase from "firebase";


    const signupSchema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
        confirmPassword: yup.string().required(),
    });

    const initialErrors = {
        name:'',
        email: '',
        password: '',
        confirmPassword: '',
    }

    function Register(){

        let history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState(initialErrors);
    const [submitted, setSubmitted] = useState(false);

    const validateForm = (data) => {
        signupSchema
        .validate(data, { abortEarly: false })
        .then((data) => {
            setErrors(initialErrors);
        })
        .catch((err) => {
            const newErrors = err.inner.reduce((acc, curr) => {
                acc[curr.path] = curr.message;
                return acc;
            }, {});
            setErrors(newErrors);
        });
    };

    const data={ name, email, password, confirmPassword };

    useEffect(() => {
        if(submitted){
            validateForm(data);
        }
    },[email, password,confirmPassword]);

    const handleSubmit =  async (e) => {
        e.preventDefault();
        setSubmitted(true);
        const data = { name, email, password, confirmPassword}
        validateForm(data);
        try{
            const data = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
            console.log(data.user.providerData[0]);
        }
        catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            console.log({errorCode,errorMessage});
        }
    };

    const settersObj = {
        email : setEmail,
        password : setPassword,
        confirmPassword : setConfirmPassword,
    };



    return(
        <div className="register-cont">
            <img className="logo-register-cinematic" src={CinematicLogo}/>
                    <div className="mini-register-cont">
                        <form className="register-form" autoComplete="none" onSubmit={handleSubmit}>
                            <h1 className="register-title">Create an account</h1>
                            <label className={`label-register ${errors.name && " error"}`}>Name *</label>
                            <Input
                            type="text" 
                            placeholder="Enter your name" 
                            style={{height:`40px`, borderRadius:`5px`}}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            value={name}
                            />
                            {errors.name && <div className="error-show">{errors.name}</div>}

                            <label className={`label-register ${errors.email && " error"}`}>Email Address *</label>
                            <Input
                            type="text" 
                            placeholder="Enter an email" 
                            style={{height:`40px`, borderRadius:`5px`}}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                            />
                            {errors.email && <div className="error-show">{errors.email}</div>}

                            <label className={`label-register${errors.password && " error"}`}>Create Password *</label>
                            <Input
                            className={`field${errors.password && " error"}`}
                            type="password" 
                            placeholder="Choose a password" 
                            style={{height:`40px`, borderRadius:`5px`}}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            />
                            {errors.password && <div className="error-show">{errors.password}</div>}
                            <label className={`label-register ${errors.confirmPassword && " error"}`}>Repeat Password *</label>
                            <Input
                            className={`field-register${errors.confirmPassword && " error"}`}
                            type="password" 
                            placeholder="Repeat your password" 
                            style={{height:`40px`, borderRadius:`5px`}}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                            value={confirmPassword}
                            />
                            {errors.confirmPassword && <div className="error-show">{errors.confirmPassword}</div>}
                            <Checkbox style={{float:`left`, color:`white`, marginTop:`15px`}} onChange={(e) => {
                                console.log(`checked = ${e.target.checked}`);
                            }}>I agree to terms & conditions</Checkbox>
                            <Button htmlType="submit" block style={{height:`40px`, backgroundColor:`#FF9700`, border:`2px solid #FF9700`, color:`white`, bottom:`0px`, borderRadius:`5px`, marginTop:`15px`}} type="default">Register</Button>
                        </form>
                    </div>
                    <div className="already-register">Already have account ?<a className="anchor-login" onClick={() => {
                        history.push("/login")
                    }}>Login</a></div>
            
            
        </div>
        
    );
}

export default Register;