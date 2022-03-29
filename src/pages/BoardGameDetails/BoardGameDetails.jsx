import { useParams, useRef, useState, useLocation } from "react-router-dom";

const BoardGameDetails = () => {
  const location = useLocation()
  const boardGame = location.state.result
  console.log(boardGame)
  return ( 

    <>
      <div className='boardgame'>
        <img src={boardGame.background_image} alt="BoardGame" />
        <h3>{boardGame.name}</h3>
        <p>{boardGame.description}</p>
      </div>
    </>
   );
}

export default BoardGameDetails;