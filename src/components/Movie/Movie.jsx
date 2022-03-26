import { Link } from "react-router-dom";

const Movie = ({movie}) => {
  return ( 
    <>
    <Link
      to='/movie'
      state={{movie}}
      className='card-link'
    >
      <div className="movie">
        <img src={movie.image_uri} alt="movie" />
        <p>{movie.name}</p>
      </div>
    </Link>
    </>
  );
}
 
export default Movie;