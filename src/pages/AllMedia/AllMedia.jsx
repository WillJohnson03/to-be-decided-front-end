import React, { useState, useEffect } from 'react';
import { VideoGame } from '../../components/VideoGame/VideoGame'
import { Movie } from '../../components/Movie/Movie'
import { BoardGame } from '../../components/BoardGame/BoardGame'
import { getBoardGameList, searchBoardGame } from '../../services/boardgame-api-calls';
import { getMoviesList, searchMovie } from '../../services/movies-api-calls';
import { getVideoGameList, searchVideoGame } from '../../services/game-api-calls';

const AllMedia = ({boardGames, movies, videoGames}) => {
  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value})
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      searchBoardGame(query)
      .then(boardGameSearchData => setSearchResults(boardGameSearchData))
      searchVideoGame(query)
      .then(videoGameSearchData => setSearchResults(setSearchResults+videoGameSearchData))
      searchMovie(query)
      .then(movieSearchData => setSearchResults(setSearchResults+movieSearchData))
    }
    catch (error) {
      console.log(error)
    }
  }

  const { query } = search

  return ( 
    <>
      <h1>Search for a videogame, movie, or board game.</h1>
      <form
      autoComplete='off'
      onSubmit={handleSubmit}
      >
      <input 
        type="text"
        name="query" 
        value={query}
        onChange={handleSearch}
      />
      <button>Search</button>
      </form>
      {query ? 
      <div>
        <h1> {query}</h1>
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