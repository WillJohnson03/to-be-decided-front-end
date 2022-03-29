import { useState } from 'react';
import {  searchBoardGame } from '../../services/boardgame-api-calls';
import {  searchMovie } from '../../services/movies-api-calls';
import { searchVideoGame } from '../../services/game-api-calls';


const AllMedia = (props) => {
  const [searchBG, setSearchBG] = useState({name: ''})
  const [searchMV, setSearchMV] = useState({name: ''})
  const [searchVG, setSearchVG] = useState({name: ''})
  const [searchResultsBG, setSearchResultsBG] = useState([])
  const [searchResultsMV, setSearchResultsMV] = useState([])
  const [searchResultsVG, setSearchResultsVG] = useState([])

  const handleSearchBoardGame = evt => {
    setSearchBG({...searchBG, [evt.target.name]: evt.target.value})
  }
  const handleSearchMovie = evt => {
    setSearchMV({...searchMV, [evt.target.name]: evt.target.value})
  }

  const handleSearchVideoGame = evt => {
    setSearchVG({...searchVG, [evt.target.name]: evt.target.value})
  }
  
  const handleSubmitBoardGame = async e => {
    e.preventDefault()
    try {
      searchBoardGame(searchBG.name)
      .then(boardGameSearchData => {setSearchResultsBG(boardGameSearchData)})
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitVideoGame = async e => {
    e.preventDefault()
    try {
      searchVideoGame(searchVG.name)
      .then(videoGameSearchData => {setSearchResultsVG(videoGameSearchData)})
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitMovie = async e => {
    e.preventDefault()
    try {
      searchMovie(searchMV.name)
      .then(movieSearchData => {setSearchResultsMV(movieSearchData)})
    } catch (error) {
      console.log(error)
    }
  }


  const { BGname } = searchBG
  const { MVname } = searchMV
  const { VGname } = searchVG

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
        value={BGname}
        onChange={handleSearchBoardGame}
      />
      <button>Search Board Game</button>
      </form>
      <form
      autoComplete='off'
      onSubmit={handleSubmitMovie}
      >
      <input 
        type="text"
        name="name" 
        value={MVname}
        onChange={handleSearchMovie}
      />
      <button>Search Movie</button>
      </form>
      <form
      autoComplete='off'
      onSubmit={handleSubmitVideoGame}
      >
      <input 
        type="text"
        name="name" 
        value={VGname}
        onChange={handleSearchVideoGame}
      />
      <button>Search Video Game</button>
      </form>
        {searchResultsBG?.games?.length ?
      <div>
        <h1>Board Game Results:</h1>
        {searchResultsBG?.games?.map((result, index) => (
          <div
            key={result.id}
          >
            {result.name} 
            <img src={result.image_url} alt={result.name} />
          </div>
        ))}
      </div>
        :
        <></>
      }   
      {searchResultsMV?.results?.length ?
      <div>
          <h1>Movie Results:</h1>
        {searchResultsMV?.results?.map((result) => (
          <div key={result.id}>
            {result.title}
            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${result.poster_path}`} alt={result.title}/>
          </div>
        ))}
      </div>
      :
      <></>
      }
      {searchResultsVG?.results?.length ?
      <div>
        <h1>Video Game results:</h1>
        {searchResultsVG?.results?.map((result) => (
          <div key={result.id}>
            {result.name}
            <img src={result.background_image} alt={result.name} />
          </div>
        ))}
      </div>
      :
      <></>
      }
    </>
  );
}

export default AllMedia;