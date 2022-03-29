import { useParams } from 'react-router-dom'
import { getProfile } from '../../services/profileService'
import { useState, useEffect } from 'react'

const Profile = (props) => {
  const [profile, setProfile] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getProfile(id)
      .then(profileData => {
        setProfile(profileData)
      })
  }, [])
  
  return (
    <>
      <h3>{profile.name}</h3>
    </>
  );
}

export default Profile;
