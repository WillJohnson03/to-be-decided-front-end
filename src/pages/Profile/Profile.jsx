import { Routes, Route, useNavigate, Navigate, useParams } from 'react-router-dom'
import { getProfile } from '../../services/profileService'
import { useState, useEffect } from 'react'

const Profile = (props) => {
  const [profile, setProfile] = useState({})
  const { id } = useParams()

const Profile = (props) => {
  const location = useLocation()
  const profile = location.state
  console.log(props)
  return (
    <>
      <h3>{profile.name}</h3>
    </>
  );
}

export default Profile;
