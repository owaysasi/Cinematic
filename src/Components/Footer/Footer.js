import React from 'react';
import './Footer.css';
import {FaFacebook as Facebook} from 'react-icons/fa';
import {GrLinkedinOption as Linkedin} from 'react-icons/gr';
import {AiFillGithub as Github} from 'react-icons/ai';
import {GrGooglePlus as Google} from 'react-icons/gr';
import Logo from '../../Pics/Cinematic-logo.png';
import LogoM from '../../Pics/Cinematic-m.png';
import { Row, Col } from 'antd';
import { useHistory } from "react-router-dom";


function Footer(){

    let history = useHistory();

    return(
        <div className="foot-cont">
            {/* <div className="mini-foot-cont">
                
            </div> */}
            <Row>
                <Col xs={{span: 3, offset:1}} lg={{span: 4, offset:2}}>
                    <div className="footer-logo-cont">
                        <img className="footer-logo" src={LogoM} alt="cinematic" onClick={() => {
                            history.push("/");
                        }}/>
                    </div>
                </Col>
                <Col xs={{span: 4, offset:3}} lg={{span: 6, offset:3}}>
                <div className="rights">@All rights are reserved</div>
                </Col>
                <Col xs={{span: 5, offset:3}} lg={{span: 6, offset:3}}>
                <div className="footer-social">
                    <div className="logo-cont">
                        <a class="facebook" href="https://www.facebook.com/oways.asi">
                            <Facebook style={{width:`20px`, height:`20px`}}/>
                        </a>
                    </div>
                    <div className="logo-cont">
                        <a class="linkedin" href="https://www.linkedin.com/in/oways-asi-981170135/">
                            <Linkedin style={{width:`20px`, height:`20px`}}/>
                        </a>
                    </div>
                    <div className="logo-cont">
                        <a class="github" href="https://github.com/owaysasi">
                            <Github style={{width:`20px`, height:`20px`}}/>
                        </a>
                    </div>
                    <div className="logo-cont">
                        <a class="google" href="google  ">
                            <Google style={{width:`20px`, height:`20px`}}/>
                        </a>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;