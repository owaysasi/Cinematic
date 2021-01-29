import React from 'react';
import './Navbar.css';
import { MdAccountCircle as Account } from 'react-icons/md';
import {FaSearch as Search} from 'react-icons/fa';
import Logo from '../../Pics/Cinematic-logo.png';
import LogoM from '../../Pics/Cinematic-m.png';
import {useState} from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, Space, Row, Col } from 'antd';
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import Logout from '../Logout/Logout';


function Navbar(){

  const user = firebase.auth().currentUser;
  console.log(user && user.providerData[0]);
  let history = useHistory();
  const style = { background: '#0092ff', padding: '8px 0' };

    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" onClick={() => {
              history.push("/register");
            }}>
              Register
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" onClick={() => {
              history.push("/login");
            }}>
              Login
            </a>
          </Menu.Item>
        </Menu>
      );

    const [query, setQuery] = useState("");

    function ChangeHandler(e) {
        setQuery(e.target.value); 
    }

    function SubmitHandler(e) {
        e.preventDefault();
        console.log(query);
    }

    return(
        <div className="nav-cont">
            {/* <div className="mini-nav-cont"> */}
                
                {/* <div className="search-nav-cont">
                    <input placeholder="search" className="search" onKeyPress={KeyHandler}/>
                </div> */}
                {/* <form className="searchBox" onSubmit={SubmitHandler}>

                    <input className="searchInput" type="text" placeholder="Search" onChange={ChangeHandler}/>
                    <button className="searchButton" type="submit">
                        <Search/>
                    </button>
                </form> */}
                {/* <div className="account-cont">
                    <a className="nav-account"><Account style={{width:`30px`, height:`30px`}}/></a>
                </div>
                <Dropdown className="dropdown-account"  overlay={menu} placement="bottomCenter">
                <a className="nav-account"><Account style={{width:`30px`, height:`30px`}}/></a>
                </Dropdown> */}
            {/* </div> */}

          <Row>
              <Col xs={{span: 3, offset:3}} lg={{span: 3, offset:2}}>
                <div className="logo-word-cont">
                    <img className="nav-logo" src={LogoM} onClick={() => {
                      history.push("/");
                    }}/>
                </div>
              </Col>
              <Col xs={{span: 7, offset:3}} lg={{span: 4, offset:2}}>
                <form className="searchBox" onSubmit={SubmitHandler}>
                  <input className="searchInput" type="text" placeholder="Search" onChange={ChangeHandler}/>
                  <button className="searchButton" type="submit" onClick={() => {
                    history.push({pathname:"/search", state : query});
                  }}>
                      <Search/>
                  </button>
                </form>
              </Col>
              <Col xs={{span: 3, offset:3}} lg={{span: 3, offset:3}}>
                <button className="browse-movies" onClick={() => {
                  history.push('/browse')
                }}>Browse movies</button>
              </Col>
              <Col xs={{span: 3, offset:3}} lg={{span: 3, offset:3}}>
                {user? (
                <Logout/>
                ) : (
                  <>
                  
                    <Dropdown className="dropdown-account"  overlay={menu} placement="bottomCenter">
                      <a className="nav-account"><Account style={{width:`30px`, height:`30px`}}/></a>
                    </Dropdown>
                  </>
                ) }
              </Col>
            </Row>

        </div>
    );
}

export default Navbar;