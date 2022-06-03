import './VideoGameDetails.css'
import { Link, useLocation } from "react-router-dom";

const VideoGameDetails = ({ handleAddVideoGame, profile }) => {
  const location = useLocation()
  const videoGame = location.state.result

  return (

    <div className="videogame-detail-container card-container">
      <div className='videogame-detail-card card'>
        <img className='videogame-detail-img card-img-top' src={videoGame.background_image} alt="videoGame" />
        <h3 className='videogame-detail-title card-title'>{videoGame.slug}</h3>
        <p className='videogame-overview'>Detials Coming Soon</p>
        <Link
          to={`/allmedia`}
        >
          <button className='add-videogame' onClick={() => handleAddVideoGame(videoGame)}>Add Video Game</button>
        </Link>
      </div>
    </div>
  );
}

export default VideoGameDetails;