import './Search.css';
import Moviecard from '../../Components/Moviecard/Moviecard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, } from 'antd';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useLocation } from "react-router-dom";

function Search(props){

    let location = useLocation();    
    const [movies, setMovies ] = useState([]);
    const [ hello, setHello ] = useState("oways");

    useEffect(() => {

        const movie = [];
        // const promises = [];
        


            // for(let j=1; j<3; j++){

            // }
            const promise = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b981e34bc09ab4977d32afaffc7ec5ca&language=en-US&query=${location.state}&page=1&include_adult=false`)
            .then(res => {
                
                for(let i=0; i<res.data.results.length; i++){
                    const film = res.data.results[i];
                    const pic = film.poster_path;
                    const backpic = film.backdrop_path;
                    const id = film.id;
                    const date = film.release_date;
                    const title = film.title;
                    const rating = film.vote_average;
                    const desc = film.overview;
                    const lang = film.original_language;
                    movie.push({
                        pic:pic,
                        backpic:backpic,
                        id:id,
                        date:date,
                        title:title,
                        rating:rating,
                        desc:desc,
                        lang:lang
                    });
                    
                }
                setMovies(movie);
                // promises.push(promise);
            })
            .catch((err) => {
                console.log(err);
            });

        
        // Promise.all([...promises]).then((values) => {
        //     setMovies(movie);
        // });
    },[]);


    return(
        <div className="search-cont">
            <Navbar/>
            <h1 className="search-title">most 20 results related to : "{location.state}"</h1>
            <Row className="search-series">
                {movies.map((movie) => {
                    return(
                        <Col key={movie.id}  className="column" xs={{ span:10, offset:1 }} xl={{ span: 5, offset: 1 }}>
                            <Moviecard 
                                title={movie.title} 
                                date={movie.date} 
                                rating={movie.rating} 
                                pic={movie.pic} 
                                backpic={movie.backpic}
                                desc={movie.desc} 
                                lang={movie.lang} 
                            />
                        </Col>
                    );
                    
                })}
            </Row>
            <Footer/>
        </div>
        
    );
}

export default Search;