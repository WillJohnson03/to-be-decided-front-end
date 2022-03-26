import { Link } from "react-router-dom";

const BoardGame = ({boardGame}) => {
  return ( 
    <>
    <Link
      to='/boardGame'
      state={{boardGame}}
      className='card-link'
    >
      <div className="boardGame">
        <img src={boardGame.image_uri} alt="boardgame" />
        <p>{boardGame.name}</p>
      </div>
    </Link>
    </>
  );
}
 
export default BoardGame;