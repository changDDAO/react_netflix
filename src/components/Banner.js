import React, {useEffect, useState} from 'react';
import axios from "../api/axios";
import requests from "../api/request";
import "./Banner.css";

function Banner(props) {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
    const truncate =(str, n) =>{
        return str?.length > n ? str.substring(0,n)+"...": str;
    }
    const fetchData = async () =>{
        /*현재 상영중인 영화정보 가지고 오기*/
        const request =await axios.get(requests.fetchNowPlaying);
        /*console.log(request);*/
        const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id;
        const {data: movieDetail} =await axios.get(`movie/${movieId}`,{
            params:
                {append_to_response: "videos"},

        });
        setMovie(movieDetail);
    }
    return (
        <header className="banner"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                    backgroundPosition: "top center",
                    backgroundSize: "cover"
                }}>
            <div className="banner__contents">
                <h1>
                    {movie.title || movie.name || movie.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button play">Play</button>
                    <button className="banner__button info">More Information</button>
                </div>
                <h1 className="banner__description">{truncate(movie.overview, 100)}</h1>
                <div className="banner--fadeBottom"/>
            </div>



        </header>
    );
}

export default Banner;