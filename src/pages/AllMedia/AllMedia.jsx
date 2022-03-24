import React, { useState, useEffect } from 'react';
import { getBoardGameList } from '../../services/api-calls';

const AllMedia = (props) => {
  const [boardGames, setBoardGames] = useState([])

  useEffect(() => {
    getBoardGameList()
    .then(boardGameData => setBoardGames(boardGameData.games))
  })
  return ( 
    <>
      <h1>List of All Medias</h1>
      <h2>All Board Games</h2>
      {boardGames.map((boardGame => (
        <div>
          <p>{boardGame.name}</p>
        </div>
      )))}
    </>
  );
}

export default AllMedia;