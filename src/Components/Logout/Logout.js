import React from 'react';
import './Logout.css';
import { BiLogOut } from 'react-icons/bi';
import firebase from "firebase";

function Logout() {
    return(
        <div className="logout-cont">
            <button className="logout-btn" onClick={ async () => {
              try{
                await firebase.auth().signOut();
              } catch(error){
                console.log(error);
              }
            }}>
                <BiLogOut style={{height:`25px`, width:`25px`}}/>
            </button>
        </div>
    );
}

export default Logout;