import './Profiles.css'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import ProfileDetails from '../ProfileDetails/ProfileDetails'


const Profiles = (props) => {
  
  console.log(props.profiles);
  return (
    <div>
      <div className='card-container'>
        {props.profiles.map(profile=>(
          <ProfileDetails  profile={profile} key={profile._id} />
        ))}
      </div>
    </div>
  )
}

export default Profiles