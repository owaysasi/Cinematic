import './Moviecard.css';
import {AiFillStar as Star} from 'react-icons/ai';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import React, { useState } from 'react';



function Moviecard(props){

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

  const {title, pic, backpic, date, desc, rating, lang} = props;

    return(
        <div className="card-cont" onClick={() => {
            showModal()
        }}>
            <img className="poster-pic" src={`https://image.tmdb.org/t/p/w500${pic}`} alt="poster"/>
            <div className="poster-details">
                <h1 className="poster-title">{title}</h1>
                <h3 className="poster-date">{date}</h3>
            </div>
            <div className="poster-rating">{rating}</div>
            <div className="poster-lang">{lang}</div>
            <Modal className="movie-modal" title="Basic Modal" 
            onCancel={handleCancel}
            visible={isModalVisible}
            closable={false}
            width="1000px"
            footer={null}
            title={false}
            bodyStyle={{backgroundColor:`#2C2C2C`, color:`white`}}
            maskClosable={true}>
                <h2 className="modal-title">Film Name : {title}</h2>
                <p>Date of release : {date}</p>
                <p>Film language : {lang}</p>
                <p>Film rating : {rating}/10</p>
                <p>Film brief : {desc}</p>
                <img className="backpic"
                    src={`https://image.tmdb.org/t/p/w500${backpic}`}/>
            </Modal>
        </div>
    );
}

export default Moviecard;