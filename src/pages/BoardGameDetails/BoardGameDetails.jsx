import { useLocation } from "react-router-dom";

const BoardGameDetails = ({handleAddBoardGame}) => {
  function removeTags(str) {
    if ((str === null) || (str === ''))
    return false
    else str = str.toString()
    return str.replace( /(<([^>]+)>)/ig, '')
  }

  const location = useLocation()
  const boardGame = location.state.result
  console.log(boardGame)
  return ( 

    <div className="card-container">
      <div className="boardgame card">
        <img className="card-imp-top" src={boardGame.image_url} alt="BoardGame" />
        <h3 className="card-title">{boardGame.name}</h3>
        <p>{removeTags(boardGame.description)}</p>
        <button className='add-boardGame card-text' onClick={() => handleAddBoardGame(boardGame)}>Add bg</button>
      </div>
    </div>
  );
}

export default BoardGameDetails;