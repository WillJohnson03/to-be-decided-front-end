import './VideoGameDetails.css'
import { Link, useLocation } from "react-router-dom";

const VideoGameDetails = ({handleAddVideoGame, profile}) => {
  const location = useLocation()
  const videoGame = location.state.result
  console.log(videoGame)
  return ( 

    <div className="card-container">
      <div className='videogame card'>
        <img className='card-img-top' src={videoGame.background_image} alt="videoGame" />
        <div className='card-body'>
          <h3 className='card-title'>{videoGame.slug}</h3>
          <Link
          to={`/profile/${profile._id}`}
          ><button className='add-game card-text' onClick={() => handleAddVideoGame(videoGame)}>Add VideoGame</button></Link>
        </div>
      </div>
    </div>
  );
}


export default VideoGameDetails;