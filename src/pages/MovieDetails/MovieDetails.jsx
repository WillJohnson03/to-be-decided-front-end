import './MovieDetails.css'
import {  Link, useLocation } from "react-router-dom";

const MovieDetails = ({handleAddMovie, profile}) => {

  const location = useLocation()
  const movie = location.state.result

  return ( 

    <div className="movie-detail-container card-container">
      <div className='movie-detail-card card'>
        <img className='movie-detail-img card-img-top' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt={movie.title}/>
        <h3 className='movie-detail-title card-title'>{movie.title}</h3>
        <p className='movie-overview'>{movie.overview}</p>
        <Link
        to={`/allmedia`}
        >
          <button className='add-movie' onClick={() => handleAddMovie(movie)}>Add Movie</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;