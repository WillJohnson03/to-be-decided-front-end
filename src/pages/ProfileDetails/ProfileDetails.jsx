import { NavLink } from "react-router-dom";

const ProfileDetails = (props) => {
  return (
    <div className='card-container'>
      <div className='card'>
        {props.profile.photo ?
          <img className='profile-img' src={props.profile.photo} alt={props.propfile?.name} />
          : <img className="profile-img card-img-top" src="https://i.imgur.com/3FLcsWl.png" alt="https://i.imgur.com/3FLcsWl.png" />
        }
        <div className='card-body'>
          <h5 className="card-title" >{props.profile.name}</h5>
          <NavLink to={`/profile/${props.profile._id}`} className="btn btn-secondary" state={props.profile}>View profile</NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;