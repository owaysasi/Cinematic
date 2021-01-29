import './Upcoming.css';
import Moviecard from '../../Components/Moviecard/Moviecard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, } from 'antd';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function Upcoming(){

    
    const [movies, setMovies ] = useState([]);

    useEffect(() => {

        const movie = [];
        const promises = [];
        



            const promise = axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=b981e34bc09ab4977d32afaffc7ec5ca&language=en-US&page=1")
            .then(res => {
                for(let i=0; i<20; i++){
                    const film = res.data.results[i];
                    const pic = film.poster_path;
                    const backpic= film.backdrop_path;
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
            });

        
        // Promise.all([...promises]).then((values) => {
        //     setMovies(movie);
        // });
    },[]);


    return(
        <div className="upcoming-cont">
            <Navbar/>
            <h1 className="upcoming-title">Upcoming</h1>
            <Row className="movie-series">
                {movies.map((movie) => {
                    return(
                        <Col className="column" xs={{ span:10, offset:1 }} xl={{ span: 5, offset: 1 }}>
                            <Moviecard 
                                key={movie.id} 
                                title={movie.title} 
                                backpic={movie.backpic}
                                date={movie.date} 
                                rating={movie.rating} 
                                pic={movie.pic} 
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

export default Upcoming;