import React from 'react';
import './CarouselT.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import Moviecard from '../Moviecard/Moviecard';
import axios from 'axios';

function CarouselT(){

   let history = useHistory();

    let settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const [movies, setMovies ] = useState([]);

    useEffect(() => {

        const movie = [];
        const promises = [];
        



            const promise = axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=b981e34bc09ab4977d32afaffc7ec5ca&language=en-US&page=1")
            .then(res => {
                for(let i=0; i<6; i++){
                    const film = res.data.results[i];
                    const pic = film.poster_path;
                    const backpic=film.backdrop_path;
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
        <div className="car-cont">
           <div className="mini-car-cont">

            <h1 className="carousel-title">Top Rated</h1>
            <Slider {...settings}>
               {movies.map((movie) => {
                   return(
                     <div key={movie.id} >
                        <Moviecard 
                        title={movie.title} 
                        pic={movie.pic} 
                        backpic={movie.backpic}
                        rating={movie.rating}
                        desc={movie.desc}
                        date={movie.date}
                        lang={movie.lang}/>
                     </div>
                   );
               })}
                {/* <div >
                   <img className="item" src={Poster} alt="poster"/>
                </div>
                <div >
                   <img className="item" src={Poster2} alt="poster"/>
                </div>
                <div >
                   <img className="item" src={Poster3} alt="poster"/>
                </div>
                <div >
                   <img className="item" src={Poster4} alt="poster"/>
                </div>
                <div >
                   <img className="item" src={Poster} alt="poster"/>
                </div>
                <div >
                   <img className="item" src={Poster2} alt="poster"/>
                </div>
                <div >
                   <img className="item" src={Poster3} alt="poster"/>
                </div>
                <div >
                   <img className="item" src={Poster4} alt="poster"/>
                </div> */}
            </Slider>


           </div>
           <button className="all-btn-toprated" onClick={() => {
              history.push("/toprated")
           }}>All</button>
        </div>
    );
}

export default CarouselT;