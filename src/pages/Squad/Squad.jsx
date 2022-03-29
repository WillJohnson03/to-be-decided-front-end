import { Link, useParams } from 'react-router-dom'
import { getSquad } from '../../services/squadService'
import { useState, useEffect } from 'react'
import userEvent from '@testing-library/user-event'

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
      <div>
        <h3>{squad.name}</h3>
        <img src={squad.avatar} alt={squad.name} />
        {props.user.profile === squad.creator ?
            <div>
              <Link
                to={`/squad/${squad._id}/edit`}
                state={{squad}}
              >
                Edit
              </Link>
              <button
                onClick={()=> props.handleDeleteSquad
                (squad._id)}
              >
                Delete
              </button>
            </div>
          :
          <>
            
          </>
        }
      </div>
    </>
  );
}

export default Squad;
