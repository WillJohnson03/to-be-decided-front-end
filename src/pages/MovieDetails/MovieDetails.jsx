import {  Link, useLocation } from "react-router-dom";

const MovieDetails = ({handleAddMovie, profile}) => {

  const location = useLocation()
  const movie = location.state.result

  return ( 

    <div className="card-container">
      <div className='movie card'>
      <div className='movie'>
      <img className='card-img-top' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt={movie.title}/>
        <h3 className='card-title'>{movie.title}</h3>
        <p>{movie.overview}</p>
        <Link
        to={`/profile/${profile._id}`}
        ><button className='add-moviecard-text' onClick={() => handleAddMovie(movie)}>Add Movie</button></Link>
      </div>
      </div>
    </div>
  );
}

export default MovieDetails;