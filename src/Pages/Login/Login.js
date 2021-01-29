import 'antd/dist/antd.css';
import './Login.css';
import { useEffect, useState } from 'react';
import { Button, Input, Checkbox } from 'antd';
import CinematicLogo from '../../Pics/Cinematic-logo.png';
import * as yup from 'yup';
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

    function Login(){

    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
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

    const data={  email, password };

    useEffect(() => {
        if(submitted){
            validateForm(data);
        }
    },[email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        const data = { email, password };
        validateForm(data);
        try{
            const a = await firebase.auth()
            .signInWithEmailAndPassword(email, password);
            console.log(a.user.providerData[0]);
            history.push("/");
        }
        catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            console.log({ errorCode, errorMessage });
        }
    };



    return(
        <div className="login-cont">
            <div className="mini-login-cont">                
                <form className="login-form" autoComplete="none" onSubmit={handleSubmit}>
                    <h1 className="login-title">Login !</h1>

                    <label className={`label-login ${errors.email && " error"}`}>Email Address</label>
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

                    <label className={`label-login${errors.password && " error"}`}>Password</label>
                    <Input
                    className={`field${errors.password && " error"}`}
                    type="password" 
                    placeholder="enter your password" 
                    style={{height:`40px`, borderRadius:`5px`}}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    />
                    {errors.password && <div className="error-show">{errors.password}</div>}
                    
                    <Button htmlType="submit" block style={{height:`40px`, backgroundColor:`#FF9700`, border:`2px solid #FF9700`, color:`white`, bottom:`0px`, borderRadius:`5px`, marginTop:`15px`}} type="default">Login</Button>
                </form>
            </div>
            <div className="already-login">First time ?<a className="anchor-login" onClick={() => {
                history.push("/register");
            }}>Register</a></div>
        </div>
        
    );
}

export default Login;