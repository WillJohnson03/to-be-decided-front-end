import './AllMedia.css'
import { useState } from 'react';
import { searchBoardGame } from '../../services/boardgame-api-calls';
import { searchMovie } from '../../services/movies-api-calls';
import { searchVideoGame } from '../../services/game-api-calls';
import { Link } from 'react-router-dom';

const AllMedia = (props) => {
  const [searchBG, setSearchBG] = useState({ name: '' })
  const [searchMV, setSearchMV] = useState({ name: '' })
  const [searchVG, setSearchVG] = useState({ name: '' })
  const [searchResultsBG, setSearchResultsBG] = useState([])
  const [searchResultsMV, setSearchResultsMV] = useState([])
  const [searchResultsVG, setSearchResultsVG] = useState([])
  const [movie, setMovie] = useState({})
  const [videoGame, setVideoGame] = useState({})
  const [boardGame, setBoardGame] = useState({})

  const handleSearchBoardGame = evt => {
    setSearchBG({ ...searchBG, [evt.target.name]: evt.target.value })
  }
  const handleSearchMovie = evt => {
    setSearchMV({ ...searchMV, [evt.target.name]: evt.target.value })
  }
  const handleSearchVideoGame = evt => {
    setSearchVG({ ...searchVG, [evt.target.name]: evt.target.value })
  }

  const handleRandomMedia = async evt => {
    evt.preventDefault()
    try {
      const foundBoardGame = await searchBoardGame(searchBG.name)
      const randomBoardGame = foundBoardGame.games[Math.floor(Math.random() * foundBoardGame.games.length)]
      setBoardGame(randomBoardGame)

      const foundMovie = await searchMovie(searchMV.name)
      const randomMovie = foundMovie.results[Math.floor(Math.random() * foundMovie.results.length)]
      setMovie(randomMovie)

      const foundVideoGame = await searchVideoGame(searchVG.name)
      const randomVideoGame = foundVideoGame.results[Math.floor(Math.random() * foundVideoGame.results.length)]
      setVideoGame(randomVideoGame)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitBoardGame = async e => {
    e.preventDefault()
    try {
      searchBoardGame(searchBG.name)
        .then(boardGameSearchData => { setSearchResultsBG(boardGameSearchData) })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitVideoGame = async e => {
    e.preventDefault()
    try {
      searchVideoGame(searchVG.name)
        .then(videoGameSearchData => { setSearchResultsVG(videoGameSearchData) })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitMovie = async e => {
    e.preventDefault()
    try {
      searchMovie(searchMV.name)
        .then(movieSearchData => { setSearchResultsMV(movieSearchData) })
    } catch (error) {
      console.log(error)
    }
  }

  const { BGname } = searchBG
  const { MVname } = searchMV
  const { VGname } = searchVG

  return (
    <div>
      <div className='all-media-container'>
        <div className='search-title'>
          <h1>Search for a videogame, movie, or board game.</h1>
        </div>
        <div className='all-media-search'>
          <form
            autoComplete='off'
            onSubmit={handleSubmitBoardGame}
            className='boardgame-search-form'
          >
            <input
              type="text"
              name="name"
              value={BGname}
              onChange={handleSearchBoardGame}
            />
            <button className='search-boardgame-btn'>Search Board Game</button>
          </form>
          <form
            autoComplete='off'
            onSubmit={handleSubmitMovie}
            className='movie-search-form'
          >
            <input
              type="text"
              name="name"
              value={MVname}
              onChange={handleSearchMovie}
            />
            <button className='search-movie-btn'>Search Movie</button>
          </form>
          <form
            autoComplete='off'
            onSubmit={handleSubmitVideoGame}
            className='videogame-search-form'
          >
            <input
              type="text"
              name="name"
              value={VGname}
              onChange={handleSearchVideoGame}
            />
            <button className='search-vidoegame-btn'>Search Video Game</button>
          </form>
        </div>
        <div className='get-random'>
          <form
            type="text"
            name="name"
            value={"VGname, BGname, MVname"}
            onSubmit={handleRandomMedia}
            className='get-random-search-form'
          >
            <button className='get-random-btn'>Get Random</button>
          </form>
          <h2>
            {movie.title}
          </h2>
          <h2>
            {boardGame.name}
          </h2>
          <h2>
            {videoGame.name}
          </h2>
        </div>
      </div>
      {searchResultsBG?.games?.length ?
        <div>
          <h1>Board Game Results:</h1>
          <div className="card-container">
            {searchResultsBG?.games?.map((result, index) => (
              <div key={result.id} >
                <div className="boardgame card">
                  <div>
                    <Link to='/BoardGameDetails' state={{ result }}><img className="boardgame-img card-img-top" src={result.image_url} alt={result.name} /></Link>
                    <div className="card-body">
                      <h3 className="boardgame-search-title card-title">{result.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        :
        <></>
      }
      {searchResultsMV?.results?.length ?
        <div>
          <h1>Movie Results:</h1>
          <div className="card-container">
            {searchResultsMV?.results?.map((result) => (
              <div key={result.id} className="card-container">
                <div className="movie card">
                  <div>
                    {result.poster_path === null ?
                      <div>
                        <Link to='/MovieDetails' state={{ result }}>No image for this title</Link>
                      </div> :
                      <div>
                        <Link to='/MovieDetails' state={{ result }}><img className="movie-img card-img-top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${result.poster_path}`} alt={result.title} /></Link>
                      </div>}
                    <div className="card-body">
                      <h3 className="movie-search-title card-title">{result.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        :
        <></>
      }
      {searchResultsVG?.results?.length ?
        <div>
          <h1>Video Game Results:</h1>
          <div className="card-container">
            {searchResultsVG?.results?.map((result) => (
              <div key={result.id} className="card-container">
                <div className="videogame card">
                  <div>
                    <Link to='/VideoGameDetails' state={{ result }}><img className="videogame-img card-img-top" src={result.background_image} alt={result.slug} /></Link>
                    <div className="card-body">
                      <h3 className="videogame-search-title card-title">{result.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        :
        <></>
      }
    </div>
  );
}

export default AllMedia;