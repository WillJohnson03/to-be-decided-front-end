import './App.css'
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import * as boardGameApiCalls from './services/boardgame-api-calls'
import * as videoGameApiCalls from './services/game-api-calls'
import * as movieApiCalls from './services/movies-api-calls'
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
<<<<<<< HEAD
import Profile from './pages/Profile/Profile';
=======
// import BoardGame from './components/BoardGame/BoardGame'

>>>>>>> 8d1e96ce6bac4049d2405927739ed8322f9fff7b

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  // const [boardGames, setBoardGames] = useState([])
  // const [videoGames, setVideoGames] = useState([])
  // const [movies, setMovies] = useState([])
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

// useEffect(() => {
//   videoGameApiCalls.getVideoGameList()
//   .then(videoGameData => setVideoGames(videoGameData))
//   boardGameApiCalls.getBoardGameList()
//   .then(boardGameData => setBoardGames(boardGameData))
//   movieApiCalls.getMoviesList()
//   .then(movieData => setMovies(movieData))
// }, [])

  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
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
          element={user ? <Profiles profiles={profiles}/> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={user ? <ProfileDetails profiles={profiles}/> : <Navigate to="/login" />}
        />
        <Route
          path='/profile/:id' element={< Profile />} 
          >
        </Route>
        <Route
          path="/AllMedia"
          element={<AllMedia />} />
        <Route
          path="/squads"
          element={<Squads />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        {/* <Route
          path='/boardgames'
          element={<BoardGame boardGames={boardGames}/>}
        /> */}
      </Routes>
    </>
  )
}

export default App
