import React from 'react';
import './CarouselG.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Moviecard from '../Moviecard/Moviecard';

function CarouselG(){

   let history = useHistory();

    let settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const [genres, setGenres ] = useState([]);
    const [hello , setHello ] = useState("man");

    useEffect(() => {

        const movie = [];
        // const promises = [];
        



            axios.get(`https://api.themoviedb.org/3/search/${hello}?api_key=b981e34bc09ab4977d32afaffc7ec5ca&language=en-US`)
            .then(res => {
                console.log(res);
                // for(let i=0; i<10; i++){
                //     const film = res.data.results[i];
                //     const pic = film.poster_path;
                //     const id = film.id;
                //     const date = film.release_date;
                //     const title = film.title;
                //     const rating = film.vote_average;
                //     const desc = film.overview;
                //     const lang = film.original_language;
                //     movie.push({
                //         pic:pic,
                //         id:id,
                //         date:date,
                //         title:title,
                //         rating:rating,
                //         desc:desc,
                //         lang:lang
                //     });
                    
                // }
                // setGenres(movie);
                // promises.push(promise);
            });

        
        // Promise.all([...promises]).then((values) => {
        //     setgenres(movie);
        // });
    },[]);

    return(
        <div className="car-cont">
           <div className="mini-car-cont">
                {/* {genres.map((genre) => {
                    return(<div></div>);
                })} */}
            {/* <h1 className="carousel-title">Most Popular</h1>
            <Slider {...settings}>
                {genres.map((genre) => {
                   return(
                     <div >
                        <Moviecard 
                        key={genre.id} 
                        title={genre.title} 
                        pic={genre.pic} 
                        rating={genre.rating}
                        desc={genre.desc}
                        date={genre.date}
                        lang={genre.lang}/>
                     </div>
                   );
                })}
            </Slider> */}


           </div>
           <button className="all-btn-popular" onClick={() => {
              history.push("/popular")
           }}>All</button>
        </div>
    );
}

export default CarouselG;