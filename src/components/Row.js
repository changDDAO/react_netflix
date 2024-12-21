import React, {useEffect, useState} from 'react';
import axios from "../api/axios";

function Row({title, id, isLargeRow,fetchUrl}) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async()=> {
        const request = await axios.get(fetchUrl);
        console.log('request',request);
        setMovies(request.data.results);
    }
    return (
        <section>
            <h2>${title}</h2>
            <div className="slider">
                <div className="slider__arrow-left">
                    <span className="arrow">
                        {"<"}
                    </span>
                </div>
                <div id={id} className="row__poster">
                    {movies.map(movie=>(
                        <img key={movie.id}
                             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        />
                        )
                        )

                    }
                </div>
            </div>
        </section>
            );
}

export default Row;