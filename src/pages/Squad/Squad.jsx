import { Link, useParams } from 'react-router-dom'
import { getSquad } from '../../services/squadService'
import { useState, useEffect } from 'react'
import './Squad.css'
const Squad = (props) => {
  const [squad, setSquad] = useState({})
  const [formData, setFormData] = useState([props.profiles])
  const { id } = useParams()

  useEffect(() => {
    getSquad(id)
      .then(squadData => {
        setSquad(squadData)
      })
  }, [id])

	const handleSubmit = evt => {
		evt.preventDefault()
    props.addUserToSquad(formData.id, squad._id)
	}

	const handleChange = (evt) => {
		setFormData({[evt.target.name]: evt.target.value})
	}

  return (
    <>
      <div className='squad'>
        <div className="squad-info">
          <div className='squad-title'>
            <div className='squad-name'>
              <h3>{squad.name}</h3>
            </div>
            <div className='squad-creator'>
              {squad.creator?.name ?
              <h4>{squad?.creator.name}'s Squad</h4>
              :<p>Loading info...</p>}          
            </div>
          </div>
          <div className='squad-pic'>
            {squad.avatar ?
            <img src={squad.avatar} alt={squad.name} />
            : <img className="card-img-top" src="https://i.imgur.com/3FLcsWl.png" alt="https://i.imgur.com/3FLcsWl.png" />
            }
          </div>
          <div classname='creator-edit'>
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
                <select name="id" onChange={handleChange}>
                  <option value=''>Choose A User</option>
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
          <div className='squad-members-title'>
            <p className='squad-members'>Squad Members:</p>
          </div>
          <div>
            {squad.squadMembers?.map(member=>(
              <div key={member._id}>
                <h1 className='member'>{member.name}</h1>
              </div>
            ))}
          </div>
        <div className='squad-media'>
          {squad.creator?.boardGame.length ?
            <div>
              <p className='mediatitle'>
                {squad?.name}'s Board Games
              </p>
              {squad.creator?.boardGame.map(bg => (
                <div key={bg._id}>
                  {bg.name}
                </div>
              ))}
            </div>
            :
          <div>
            <p className='mediatitle'>This squad has no board games!</p>
          </div>
          }
          {squad.creator?.movie.length ?
            <div>
              <p className='mediatitle'>{squad?.name}'s Movies</p>
                {squad.creator?.movie.map(film => (
                <div key={film._id}>
                  {film.title}
                </div>
                ))}
            </div>
            :
          <div>
            <p className='mediatitle'>This squad has no movies!</p>
          </div>
          }
          {squad.creator?.videoGame.length ?
            <div>
              <p className='mediatitle'>{squad?.name}'s Video Games</p>
              {squad.creator?.videoGame.map(vg => (
                <div key={vg._id}>
                  {vg.name}
                </div>
              ))}
            </div>
          :
          <div>
            <p className='mediatitle'>This squad has no video games!</p>
          </div>
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default Squad;
