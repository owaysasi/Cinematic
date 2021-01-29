import React from 'react';
import './Error.css';
import 'antd/dist/antd.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";

function Error() {

    let history = useHistory();

    return(
        <div className="error-cont">
            <Navbar/>
            <div className="mini-error-cont">
            <h1 className="error-title">Page Not Found</h1>
            <Button className="go-back-btn" onClick={() => {
                history.goBack()
            }}>Go Back</Button>
            </div>
            <Footer/>
        </div>
    );
}

export default Error;