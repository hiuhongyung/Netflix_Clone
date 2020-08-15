import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";


//when the row runs, we want to make a requests to TMDB to get the info
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  //A snippet of cide which runs based on a specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playervars : {
        autoplay: 1,
    },
};
const [trailerUrl, setTrailerUrl] = useState("");
const handleClick = (movie) => {
  if(trailerUrl){
    setTrailerUrl('');

  }else{
    movieTrailer(movie?.name || "")
    .then(url => {
      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get('v'));
    }).catch(error => console.log(error));
  }
}

  return (
    <div className="row">
      <h2> {title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          ///b5XfICAvUe8beWExBz97i0Qw4Qh.jpg thats not a Url
          <img
            key={movie.id} //for faster
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"} `}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
