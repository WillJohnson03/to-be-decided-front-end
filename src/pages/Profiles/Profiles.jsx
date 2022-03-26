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
    <div>
      {profiles.length ?  
          <>
            <div className='card-container'>
            {profiles.map(profile=>
                <div key={profile._id} className="card">
                  <img className="card-img-top" src="https://picsum.photos/286/180" alt="https://picsum.photos/179/200" />
                  <div className='card-body'>
                    <h5 className="card-title" >{profile.name}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <NavLink to="/" className="btn btn-secondary">View profile</NavLink>
                  </div>
                </div>
            )}
            </div>
          </>
        :
          <p>No profiles yet</p>
        }
    </div>
  )
}

export default Profiles