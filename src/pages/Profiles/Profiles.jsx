import './Profiles.css'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import * as profileService from '../../services/profileService'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <div className='card-container'>
        <div className="card">
            {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
          {profiles.length ?  
          <>
            {profiles.map(profile=>
                <div key={profile._id} className="card-body">
                  <h5 className="card-title" >{profile.name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <NavLink to="/" className="btn btn-primary">View profile</NavLink>
                </div>
              
            )}
          </>
        :
          <p>No profiles yet</p>
        }
        </div>
      </div>
    </>
  )
}
 
export default Profiles