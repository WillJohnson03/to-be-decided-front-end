import { useParams, useRef, useState, useLocation } from "react-router-dom";

const VideoGameDetails = () => {
  const location = useLocation()
  const videoGame = location.state.result
  console.log(videoGame)
  return ( 

    <>
      <div className='videogame'>
        <img src={videoGame.background_image} alt="videoGame" />
        <h3>{videoGame.name}</h3>
        <p>{videoGame.description}</p>
      </div>
    </>
   );
}

export default VideoGameDetails;