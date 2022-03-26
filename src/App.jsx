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
import Squads from './pages/Squads/Squads'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AllMedia from './pages/AllMedia/AllMedia'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [boardGames, setBoardGames] = useState([])
  const [videoGames, setVideoGames] = useState([])
  const [movies, setMovies] = useState([])


const [search, setSearch] = useState({query: ''})
const [searchResults, setSearchResults] = useState({boardGames: [], movies: [], videoGames: []})

useEffect(() => {
  videoGameApiCalls.getVideoGameList()
  .then(videoGameData => setVideoGames(videoGameData))
  boardGameApiCalls.getBoardGameList()
  .then(boardGameData => setBoardGames(boardGameData))
  movieApiCalls.getMoviesList()
  .then(movieData => setMovies(movieData))
}, [])

  // async function videoGameApi() {
  //   try {
  //     const vGames = await videoGameApiCalls.getVideoGameList() 
  //     setVideoGames(vGames)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  

  

  // async function boardGameApi() {
  //   try {
  //     const bGames = await boardGameApiCalls.getBoardGameList() 
  //     setBoardGames(bGames)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  

  // async function moviesApi() {
  //   try {
  //     const movie = await movieApiCalls.getMoviesList() 
  //     setMovies(movie)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   videoGameApi()
  //   boardGameApi()
  //   moviesApi()
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
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/AllMedia"
          element={<AllMedia videoGames={videoGames} boardGames={boardGames} movies={movies}/>} />
        <Route
          path="/squads"
          element={<Squads />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
