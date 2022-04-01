import './Squad.css'
import { Link, useParams } from 'react-router-dom'
import { getSquad } from '../../services/squadService'
import { useState, useEffect } from 'react'
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
    <div className='moviegame'>
      <div className='squad'>
        <div className="squad-info">
          <div className='squad-title'>
            <div className='squad-name'>
              <h2>{squad.name}</h2>
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
          <div className='creator-edit'>
            {props.user.profile === squad.creator?._id ?
              <div>
                <Link
                  to={`/squad/${squad._id}/edit`}
                  state={{squad}}
                  className='edit-link'
                >
                  Edit
                </Link>
                <button 
                  className='delete-squad-btn'
                  onClick={()=> props.handleDeleteSquad
                  (squad._id)}
                >
                  Delete
                </button>
                <form className='add-user-squad-form' method="POST" onSubmit={handleSubmit}>
                <select className='member-dropdown' name="id" onChange={handleChange}>
                  <option value=''>Choose A User</option>
                    {props.profiles.map(profile=>( 
                    <option value={profile._id} key={profile._id}>{profile.name}</option>
                    ))}
                  </select>
                  <button  type="submit" className="add-user-squad-btn">Add User to Squad</button>
                </form>
              </div>
              :
              <>
              </>
            }
          </div>
        </div>
        <div className='member-container'>
          <div className='squad-members-title'>
            <h2>Squad Members</h2>
          </div>
          <div className='squad-members'>
            {squad.squadMembers?.map(member=>(
              <div key={member._id}
              className='card-container'>
                <h3>{member.name}</h3> 
              </div>
            ))}
          </div>
        </div>
        <div id='thing' className='squad-media'>
          <div className='squad-boardgame-list'>

          {squad.creator?.boardGame.length ?
            <div >
                <h4 className='squad-boardgame-title'>{squad?.name}'s Board Games</h4>
              <ul>
              {squad.creator?.boardGame.map(bg => (
                <li key={bg._id}>
                  {bg.name}
                </li>
              ))}
              </ul>
            </div>
            :
            <div>
            <p>This squad has no board games!</p>
          </div>
          }
          </div>
          <div className='squad-movie-list'>
            {squad.creator?.movie.length ?
              <div>
                <h4 className='squad-movie-title'>{squad?.name}'s Movies</h4>
                <ul>

                  {squad.creator?.movie.map(film => (
                    <li key={film._id}>
                    {film.title}
                  </li>
                  ))}
                  </ul>
              </div>
              :
            <div>
              <p>This squad has no movies!</p>
            </div>
            }
          </div>
          <div className='squad-videogame-list'>
          {squad.creator?.videoGame.length ?
            <div>
              <h4 className='squad-videogame-title'>{squad?.name}'s Video Games</h4>
              <ul>
              {squad.creator?.videoGame.map(vg => (
                <div key={vg._id}>
                  {vg.name}
                </div>
              ))}
              </ul>
            </div>
          :
          <div>
            <p>This squad has no video games!</p>
          </div>
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Squad;
