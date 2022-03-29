import { Routes, Route, useNavigate, Navigate, useParams, useLocation } from 'react-router-dom'
import { getProfile } from '../../services/profileService'
import { useState, useEffect } from 'react'

const Profile = (props) => {
  const [profile, setProfile] = useState([])
  const { id } = useParams()

  return (
    <>
      <h3>{profile.name}</h3>
    </>
  );
}

export default Profile;
