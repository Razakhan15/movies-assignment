import React, { useEffect, useState } from "react";
import "./MovieInfo.css";
import { Link } from "react-router-dom";
import Card from "./Card";

const MoviInfo = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    let data = await fetch(url);
    let parseData = await data.json();
    setMovies(parseData);
    console.log(parseData);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="wrapper">
        {movies?.map((movie) => {
          return (
            <div key={movie.show.id}>
              <div className="main_card" >
                <div className="card_left">
                  <div className="card_datails">
                    <h1>{movie.show.name}</h1>
                    <div className="card_cat">
                      <p className="PG">PG - 13</p>
                      <p className="year">{movie.show.premiered}</p>
                      <p className="genre">{movie.show.genres}</p>
                      <p className="time"></p>
                    </div>
                    <p className="disc">{movie.show.summary.slice(0, 70)}</p>
                    <Link style={{color:'black'}} to="/more" state={[movie.show.summary,movie.show.image?.medium,movie.show.name]}>Read more</Link>
                    <div className="social-btn">
                      <button>
                        <i className="fas fa-play">Status - {movie.show.status}</i> 
                      </button>
                      <button>
                        <i className="fas fa-thumbs-up">rating - {movie.show.rating?.average}</i> 
                      </button>
                      <button>
                        <a style={{color:"white"}} href={movie.show.url}>Watch</a>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card_right">
                  <div className="img_container">
                    <img
                      src={movie.show.image?.medium ? movie.show.image?.medium:"https://icon2.cleanpng.com/20180605/ijl/kisspng-computer-icons-image-file-formats-no-image-5b16ff0d2414b5.0787389815282337411478.jpg"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MoviInfo;
