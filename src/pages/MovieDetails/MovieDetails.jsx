import {  useLocation } from "react-router-dom";

const MovieDetails = () => {

  const location = useLocation()
  const movie = location.state.result
  console.log(movie)
  return ( 

    <>
      <div className='movie'>
      <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt={movie.title}/>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    </>
   );
}

export default MovieDetails;