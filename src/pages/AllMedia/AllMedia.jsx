import { useState } from 'react';
import {  searchBoardGame } from '../../services/boardgame-api-calls';
import {  searchMovie } from '../../services/movies-api-calls';
import { searchVideoGame } from '../../services/game-api-calls';
import { version } from 'react-dom/cjs/react-dom.development';

const AllMedia = () => {
  const [search, setSearch] = useState({name: ''})
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value})
  }
  
  const handleSubmitBoardGame = async e => {
    e.preventDefault()
    try {
      searchBoardGame(search.name)
      .then(boardGameSearchData => {setSearchResults(boardGameSearchData)})
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitVideoGame = async e => {
    e.preventDefault()
    try {
      searchVideoGame(search.name)
      .then(videoGameSearchData => {setSearchResults(videoGameSearchData)})
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitMovie = async e => {
    e.preventDefault()
    try {
      searchMovie(search.name)
      .then(movieSearchData => {setSearchResults(movieSearchData)})
    } catch (error) {
      console.log(error)
    }
  }

  const isFormInvalid = () => {
    return !(name)
  }

  const { name } = search

  return ( 
    <>
      <h1>Search for a videogame, movie, or board game.</h1>
      <form
      autoComplete='off'
      onSubmit={handleSubmitBoardGame}
      >
      <input 
        type="text"
        name="name" 
        value={name}
        onChange={handleSearch}
      />
      <button disabled={isFormInvalid()}>Search Board Game</button>
      </form>
      <form
      autoComplete='off'
      onSubmit={handleSubmitMovie}
      >
      <input 
        type="text"
        name="name" 
        value={name}
        onChange={handleSearch}
      />
      <button disabled={isFormInvalid()}>Search Movie</button>
      </form>
      <form
      autoComplete='off'
      onSubmit={handleSubmitVideoGame}
      >
      <input 
        type="text"
        name="name" 
        value={name}
        onChange={handleSearch}
      />
      <button disabled={isFormInvalid()}>Search Video Game</button>
      </form>
    </>
  );
}

export default AllMedia;