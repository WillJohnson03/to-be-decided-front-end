import { Link } from 'react-router-dom';
import SquadDetails from '../SquadDetails/SquadDetails';
import './Squads.css'
function Squads(props) {
  return (
    <>
      <h1>
        All Squads
      </h1>
      <Link
        to="/createsquad"
      >
        <h2 className='createSquad'>Create New Squad</h2></Link>
      <div>
        <div className='card-container'>
          {props.squads.map(squad => (
            <SquadDetails squad={squad} key={squad._id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Squads;