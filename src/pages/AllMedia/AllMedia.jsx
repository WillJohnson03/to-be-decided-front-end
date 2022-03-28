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
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      searchBoardGame(search.name)
      .then(boardGameSearchData => {setSearchResults(boardGameSearchData)})
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
    </>
  );
}

export default AllMedia;