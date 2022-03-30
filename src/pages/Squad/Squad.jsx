import { Link, useParams } from 'react-router-dom'
import { getSquad } from '../../services/squadService'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Squad = (props) => {
  const location = useLocation()
  const [squad, setSquad] = useState({})
  const [formData, setFormData] = useState(location.state)
  const { id } = useParams()

  useEffect(() => {
    getSquad(id)
      .then(squadData => {
        setSquad(squadData)
      })
  }, [id])
  

	const handleSubmit = evt => {
		evt.preventDefault()
		const newSquadMember = new FormData()
		newSquadMember.append('name', formData.name)
		newSquadMember.append('avatar', formData.avatar)
		newSquadMember.append('_id', formData._id) 
    newSquadMember.append('squadMembers', formData.squadMembers)
    props.addUserToSquad(newSquadMember)
	}

	const handleChange = (evt) => {
		setFormData({...formData, [evt.target.name]: evt.target.value})
	}

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
              <form  method="POST" onSubmit={handleSubmit}>
              <select name="newMember" onChange={handleChange}>
                  {props.profiles.map(profile=>( 
                  <option value={profile._id} key={profile._id}>{profile.name}</option>
                  ))}
                </select>
                <button type="submit" className="btn btn-primary">Add User to Squad</button>
              </form>
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
