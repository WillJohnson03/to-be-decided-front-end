import './App.css'
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate, useParams } from 'react-router-dom'
import * as boardGameApiCalls from './services/boardgame-api-calls'
import * as videoGameApiCalls from './services/game-api-calls'
import * as movieApiCalls from './services/movies-api-calls'
import * as squadService from './services/squadService'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import Squads from './pages/Squads/Squads'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import AllMedia from './pages/AllMedia/AllMedia'
import Profile from './pages/Profile/Profile';
import CreateSquad from './pages/CreateSquad/CreateSquad'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [squads, setSquads] = useState([])
  const [profiles, setProfiles] = useState([])
  const navigate = useNavigate()
  // const [boardGames, setBoardGames] = useState([])
  // const [videoGames, setVideoGames] = useState([])
  // const [movies, setMovies] = useState([])
  const { id } = useParams()

  useEffect(() => {
    profileService.getAllProfiles()
      .then(profiles => setProfiles(profiles))
    squadService.getAllSquads()
    .then(squads => setSquads(squads))
  }, [])

 

  // useEffect(() => {
  //   videoGameApiCalls.getVideoGameList()
  //   .then(videoGameData => setVideoGames(videoGameData))
  //   boardGameApiCalls.getBoardGameList()
  //   .then(boardGameData => setBoardGames(boardGameData))
  //   movieApiCalls.getMoviesList()
  //   .then(movieData => setMovies(movieData))
  // }, [])


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddSquad = async newSquadData => {
    const newSquad = await squadService.create(newSquadData)
    setSquads([...squads, newSquad])
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles profiles={profiles} /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles"
          element={user ? <ProfileDetails profiles={profiles} /> : <Navigate to="/login" />}
        />
        <Route
          path='/profile/:id' element={< Profile profiles={profiles} />}
        >
        </Route>
        <Route
          path="/AllMedia"
          element={<AllMedia />} />
        <Route
          path="/squads"
          element={<Squads squads={squads} />}
        />
        <Route
          path="/createsquad"
          element={<CreateSquad handleAddSquad={handleAddSquad} navigate={navigate}/>}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
