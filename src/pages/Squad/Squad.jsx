import { Link, useParams } from 'react-router-dom'
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
  }, [id])
  

  return (
    <>
      <div>
        <h3>{squad.name}</h3>
        <div>
          {squad.creator?.name ?
          <p>{squad?.creator.name}'s Squad</p>
          : <p>Loading info</p>}
        </div>
        {squad.avatar ?
        <img src={squad.avatar} alt={squad.name} />
        : <img className="card-img-top" src="https://picsum.photos/286/180" alt="https://picsum.photos/179/200" />
        }
        {props.user.profile === squad.creator?._id ?
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
