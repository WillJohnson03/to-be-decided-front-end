import { NavLink } from "react-router-dom";

const SquadDetails = (props) => {  
  return ( 
    <div className='card-container'>
      <div className='card'>
        {props.squad.avatar ?
        <img className="card-img-top" src={props.squad.avatar} alt={props.squad.avatar} />
        :
        <img className="card-img-top" src="https://i.imgur.com/3FLcsWl.png" alt="https://i.imgur.com/3FLcsWl.png" />
        }
        <div className='card-body'>
          <h5 className="card-title" >{props.squad.name}</h5>
          <p className="card-text">
          {props.squad.creator?.name}'s Squad
          </p>
          <NavLink to={`/squad/${props.squad._id}`} className="btn btn-outline-*" state={props.squad}>View Squad</NavLink>
        </div>
      </div>
    </div>
  );
}

export default SquadDetails;