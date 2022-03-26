import { VideoGame } from '../../components/VideoGame/VideoGame'
import { Movie } from '../../components/Movie/Movie'
import { BoardGame } from '../../components/BoardGame/BoardGame'
import React, { useState, useEffect } from 'react';

const AllMedia = ({boardGames, movies, videoGames}) => {
  const [search, setSearch] = useState({query: ''})
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = evt => {
    setSearch({...search, [evt.target.name]: evt.target.value.toLowerCase()})
  }
  


  return ( 
    <>
      <h1>Search for a videogame, movie, or board game.</h1>
      <input 
        type="text"
        name="query" 
        value={search.query}
        onChange={handleSearch}
      />
      {search.query ? 
      <div>
        <h1> Search Results</h1>
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