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
      <div className="card" activeStyle={{width: 18}}>
          {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
        {profiles.length ?  
        <>
          {profiles.map(profile=>
            <>
              <p key={profile._id}>{profile.name}</p>
              <div className="card-body">
                <h5 cclassName="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
              </div>
            </>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
      </div>
    </>
  )
}
 
export default Profiles