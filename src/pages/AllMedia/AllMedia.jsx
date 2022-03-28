import React, { useState } from 'react';
// import { VideoGame } from '../../components/VideoGame/VideoGame'
// import { Movie } from '../../components/Movie/Movie'
// import { BoardGame } from '../../components/BoardGame/BoardGame'
import {  searchBoardGame } from '../../services/boardgame-api-calls';
import {  searchMovie } from '../../services/movies-api-calls';
import { searchVideoGame } from '../../services/game-api-calls';

const AllMedia = ({boardGames, movies, videoGames}) => {
  const [search, setSearch] = useState({name: ''})
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value})
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      searchBoardGame(name)
      .then(boardGameSearchData => {setSearchResults(boardGameSearchData)})
      searchVideoGame(name)
      .then(videoGameSearchData => {setSearchResults(setSearchResults+videoGameSearchData)})
      searchMovie(name)
      .then(movieSearchData => {setSearchResults(setSearchResults+movieSearchData)})
    }
    catch (error) {
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
      onSubmit={handleSubmit}
      >
      <input 
        type="text"
        name="name" 
        value={name}
        onChange={handleSearch}
      />
      <button disabled={isFormInvalid()}>Search</button>
      </form>
      {name ? 
      <div>
        <h1> {name}</h1>
      </div>
      :
      <div>
        <h1> Search for something!</h1>
      </div>
      }
    </>
  );
}

export default AllMedia;