import './BoardGameDetails.css'
import { Link, useLocation } from "react-router-dom";


const BoardGameDetails = ({handleAddBoardGame, profile}) => {
  function removeTags(str) {
    if ((str === null) || (str === ''))
    return false
    else str = str.toString()
    return str.replace( /(<([^>]+)>)/ig, '')
  }

  const location = useLocation()
  const boardGame = location.state.result
  return ( 

    <div className="boardgame-detail-container card-container">
      <div className="boardgame-detail-card card">
        <img className="boardgame-detatil-img card-imp-top" src={boardGame.image_url} alt="BoardGame" />
        <h3 className="boardgame-detail-title card-title">{boardGame.name}</h3>
        <p className='boardgame-description'>{removeTags(boardGame.description)}</p>
        <Link
        to={`/allmedia`}
        ><button className='add-boardGame' onClick={() => handleAddBoardGame(boardGame)}>Add Board Game</button></Link>
      </div>
    </div>
  );
}

export default BoardGameDetails;