import './Profiles.css'
import ProfileDetails from '../ProfileDetails/ProfileDetails'


const Profiles = (props) => {
  return (
    <div>
      <div className='card-container'>
        {props.profiles.map(profile => (
          <ProfileDetails profile={profile} key={profile._id} />
        ))}
      </div>
    </div>
  )
}

export default Profiles