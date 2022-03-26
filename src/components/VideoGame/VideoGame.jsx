import { Link } from "react-router-dom";

const VideoGame = ({videoGame}) => {
  return ( 
    <>
    <Link
      to='/videoGame'
      state={{videoGame}}
      className='card-link'
    >
      <div className="videoGame">
        <img src={videoGame.image_uri} alt="videogame" />
        <p>{videoGame.name}</p>
      </div>
    </Link>
    </>
  );
}
 
export default VideoGame;