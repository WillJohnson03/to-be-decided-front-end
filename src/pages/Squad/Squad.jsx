import { useParams } from 'react-router-dom'
import { getSquad } from '../../services/squadService'
import { useState, useEffect } from 'react'

const Squad = (props) => {
  const [squad, setSquad] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getSquad(id)
      .then(squadData => {
        setSquad(squadData)
      })
  }, [])
 

  return (
    <>
      <h3>test</h3>
    </>
  );
}

export default Squad;
