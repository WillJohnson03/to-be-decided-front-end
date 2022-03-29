import './VideoGameDetails.css'
import { useParams, useRef, useState, useLocation } from "react-router-dom";

const VideoGameDetails = (handleRemoveVideoGame, handleAddVideoGame) => {
  const location = useLocation()
  const videoGame = location.state.result
  console.log(videoGame)
  return ( 

    <div className="card-container">
      <div className='videogame card'>
        <img className='card-img-top' src={videoGame.background_image} alt="videoGame" />
        <div className='card-body'>
          <h3 className='card-title'>{videoGame.slug}</h3>
          <button className='add-game' onClick={handleAddVideoGame}>Add VideoGame</button>
        </div>
      </div>
    </div>
  );
}


export default VideoGameDetails;