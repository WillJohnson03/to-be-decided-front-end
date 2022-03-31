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
    <>
      <div>
        <h3>{squad.name}</h3>
        <div>
          {squad.creator?.name ?
          <h4>{squad?.creator.name}'s Squad</h4>
          :<p>Loading info</p>}          
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
              <select name="id" onChange={handleChange}>
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
          {squad.squadMembers?.map(member=>(
        <div key={member._id}className='card-container'>
            <h1>{member.name}</h1>
        </div>
          ))}
        </div>
        <div>
          {squad.creator?.boardGame.length ?
          <div>
            <p>{squad.creator?.name}'s Board Games</p>
            {squad.creator?.boardGame.map(bg => (
            <div key={bg._id}>{bg.name}</div>
            ))}<br></br> 
          </div>
          :
          <div></div>}
          {squad.creator?.movie.length ?
          <div>
            <p>{squad.creator?.name}'s Movie</p>
            {squad.creator?.movie.map(film => (
            <div key={film._id}>{film.title}</div>
            ))}<br></br>
          </div>
          :
          <div></div>}
          {squad.creator?.videoGame.length ?
          <div>
            <p>{squad.creator?.name}'s Video Games</p>
            {squad.creator?.videoGame.map(vg => (
            <div key={vg._id}>{vg.name}</div>
            ))}<br></br>
          </div>
          :
          <div></div>}
        </div>
    </>
  );
}

export default Squad;
