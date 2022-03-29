import { NavLink } from "react-router-dom";

const SquadDetails = (props) => {  
  return ( 
    <div className='card-container'>
      <div className='card'>
        <img className="card-img-top" src={props.squad.avatar} alt={props.squad.avatar} />
        <div className='card-body'>
          <h5 className="card-title" >{props.squad.name}</h5>
          <p className="card-text">
          {props.squad.creator.name}'s squad
          </p>
          <NavLink to={`/squad/${props.squad._id}`} className="btn btn-secondary" state={props.squad}>View Squad</NavLink>
        </div>
      </div>
    </div>
  );
}

export default SquadDetails;