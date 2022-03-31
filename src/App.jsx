import './App.css'
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
// import * as boardGameApiCalls from './services/boardgame-api-calls'
// import * as videoGameApiCalls from './services/game-api-calls'
// import * as movieApiCalls from './services/movies-api-calls'
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
import Squad from './pages/Squad/Squad';
import VideoGameDetails from './pages/VideoGameDetails/VideoGameDetails.jsx'
import EditSquad from './pages/EditSquad/EditSquad';
import MovieDetails from './pages/MovieDetails/MovieDetails'
import BoardGameDetails from './pages/BoardGameDetails/BoardGameDetails'
import EditProfile from './pages/EditProfile/EditProfile';

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [squads, setSquads] = useState([])
  const [profiles, setProfiles] = useState([])
  const navigate = useNavigate()
  const [profile, setProfile] = useState({})
  // const [boardGames, setBoardGames] = useState([])
  // const [videoGames, setVideoGames] = useState([])
  // const [movies, setMovies] = useState([])
  // const { id } = useParams()

  useEffect(() => {
    profileService.getAllProfiles()
      .then(profiles => setProfiles(profiles))
    squadService.getAllSquads()
    .then(squads => setSquads(squads))
  }, [])

  // useEffect(() => {
  //   if (user) {
  //     profileService.getProfile(user.profile)
  //     .then(profileData => {
  //       setProfile(profileData)
  //     })
  //   }
  // }, [user])  

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

  const handleEditSquad = updatedSquadData => {
    squadService.update(updatedSquadData)
    .then(updatedSquad => {
      const newSquadsArray = squads.map(squad => squad._id === updatedSquad._id ? updatedSquad : squad)
      setSquads(newSquadsArray)
      navigate('/squads')
    })
  }

  const handleEditProfile = updatedProfileData => {
    profileService.update(updatedProfileData)
    .then(updatedProfile => {
      const newProfilesArray = profiles.map(profile => profile._id === updatedProfile._id ? updatedProfile: profile)
      setProfile(newProfilesArray)
      navigate('/profiles')
    })
  }  
  
  const addUserToSquad = (newSquadMemberID, squadID) => {
    console.log(newSquadMemberID)
    squadService.addUser(newSquadMemberID, squadID)
    .then(updatedSquad => {
      const newSquadsArray = squads.map(squad => squad._id === updatedSquad._id ? updatedSquad : squad)
      setSquads(newSquadsArray)
      navigate(`/squads`)
    })
  }

  const handleDeleteSquad = id => {
    squadService.deleteOne(id)
    .then(deletedSquad => setSquads(squads.filter(squad => squad._id !== deletedSquad._id)))
    navigate('/squads')
  }

  
  
  const handleAddVideoGame = videoGame => {
    profileService.addVideoGame(videoGame)
    .then(updatedProfile => {
      setProfile(updatedProfile)
    })
  }
  
  const handleAddMovie = movie => {
    profileService.addMovie(movie)
    .then(updatedProfile => {
      setProfile(updatedProfile)
    })
  }
  
  const handleAddBoardGame = boardgame => {
    profileService.addBoardGame(boardgame)
    .then(updatedProfile => {
      setProfile(updatedProfile)
    })
  }
  
  // const handleRemoveVideoGame = id => {
    //   profileService.removeVideoGame(id)
    //   .then(updatedProfile => {
      //     setProfile(updatedProfile)
      //   })
      // }

  // const handleRemoveMovie = id => {
  //   profileService.removeMovie(id)
  //   .then(updatedProfile => {
  //     setProfile(updatedProfile)
  //   })
  // }


  // const handleRemoveBoardGame = id => {
  //   profileService.removeBoardGame(id)
  //   .then(updatedProfile => {
  //     setProfile(updatedProfile)
  //   })
  // }

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
          element={user ? <Profiles profiles={profiles} user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles"
          element={user ? <ProfileDetails profiles={profiles} user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path='/profile/:id' element={< Profile profiles={profiles} user={user} />}
        />
        <Route
          path='/profile/:id/edit'
          element={
            <EditProfile
              handleEditProfile={handleEditProfile}
              profiles={profiles}
              profile={profile}
              user={user}
            />
          }
        />
        <Route
          path="/AllMedia"
          element={<AllMedia />} />
        <Route
          path="/squads"
          element={<Squads squads={squads} user={user}  />}
        />
        <Route
          path='/squad/:id' 
          element={<Squad squads={squads} profiles={profiles} user={user} 
          addUserToSquad={addUserToSquad}handleDeleteSquad={handleDeleteSquad} />}
        ></Route>
        <Route
          path='/squad/:id/edit'
          element={
            <EditSquad
              handleEditSquad={handleEditSquad}
              user={user}
            />
          }
        />
        <Route
          path="/createsquad"
          element={<CreateSquad user={user} handleAddSquad={handleAddSquad} navigate={navigate}/>}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route path='/VideoGameDetails' 
          element={
            <VideoGameDetails 
              handleAddVideoGame={handleAddVideoGame} 
              // handleRemoveVideoGame={handleRemoveVideoGame}
              profiles={profiles}
              profile={profile}
            />
          }
        />
        <Route path='/MovieDetails'
          element={
            <MovieDetails 
              handleAddMovie={handleAddMovie}
              // handleRemoveMovie={handleRemoveMovie}
              profiles={profiles}
              profile={profile}
            />
          }
        />
        <Route path='/BoardGameDetails' 
          element={
          <BoardGameDetails
            handleAddBoardGame={handleAddBoardGame}
            // handleRemoveBoardGame={handleRemoveBoardGame}
            profiles={profiles}
            profile={profile}
          />
        }
        />
      </Routes>
    </>
  )
}

export default App
