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
        {squad.avatar ?
        <img src={squad.avatar} alt={squad.name} />
        : <img className="card-img-top" src="https://picsum.photos/286/180" alt="https://picsum.photos/179/200" />
        }
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
