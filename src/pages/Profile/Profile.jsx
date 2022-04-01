import './Profile.css'
import { Link, useParams } from 'react-router-dom'
import { getProfile } from '../../services/profileService'
import { useState, useEffect } from 'react'

const Profile = (props) => {
  const [profile, setProfile] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getProfile(id)
      .then(profileData => {
        setProfile(profileData)
      })
  }, [id])
  
  function removeTags(str) {
    if ((str === null) || (str === ''))
    return false
    else str = str.toString()
    return str.replace( /(<([^>]+)>)/ig, '')
  }

  
  return (
    <>
      <div className='profile-div'>
        <h3 className='profile-name'>{profile.name}</h3>
        {profile.photo ?
        <img className='profile-detail-img' src={profile.photo} alt={profile.name} />
        : <img className="profile-detail-img card-img-top" src="https://i.imgur.com/3FLcsWl.png" alt="https://i.imgur.com/3FLcsWl.png" />
        }
        {props.user.profile === profile._id?
        <div className="profile-edit">
          <Link
            to={`/profile/${profile._id}/edit`}
            state={{profile}}
            >
            Edit
            </Link>
        </div>
        :
        <></>
        }
      </div>      
      <h3 className='media-list'>Movie list</h3>
      {profile.movie?.length ? 
      <div className='card-container'>
        {profile.movie?.map((movies, index) => (
          <div  key={movies._id}>
            <div  className='card'>
              <img className="movie-img card-img-top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movies.poster_path}`} alt={movies.title}/>
              <div className='card-body'>
                <h5 className="card-title">{movies.title}</h5>
                <button type="button" className=" details-btn" data-toggle="modal" data-target={`#${movies._id}ModalCenter`}>Details
                </button>
                <div className="modal fade" id={`${movies._id}ModalCenter`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{movies.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                          {movies.overview} 
                          <br /> 
                          Release date: <span>{movies.release_date}</span>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="close-btn" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
      :
      <div>No movies yet.</div>}
      
      <h3 className='media-list'>Video Game List</h3>
      {profile.videoGame?.length ?
      <div className='videogame-container card-container'>
        {profile.videoGame?.map((videoGames, index) =>
            <div  key={videoGames._id}>
              <div  className='card'>
              <img className="videogame-img card-img-top" src={videoGames.background_image} alt={videoGames.name}/>
              <div className='card-body'>
                <h5 className="card-title">{videoGames.name}</h5>
                <button type="button" className=" details-btn" data-toggle="modal" data-target={`#${videoGames._id}ModalCenter`}>Details
                </button>
                <div className="modal fade" id={`${videoGames._id}ModalCenter`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{videoGames.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>Detials Coming Soon</h5>
                        <br /> 
                        {videoGames?.released ? 
                          <p>Release date: <span>{videoGames.released}</span></p> 
                          :
                          <p>TBA</p>
                        }
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div> :
    <div>No video games yet</div>}
    <h3 className='media-list'>Board Game List</h3>  
      {profile.boardGame?.length ?
      <div className='boardgame-container card-container'>
        {profile.boardGame?.map((boardGames, index) =>
            <div key={boardGames._id}>
              <div  className='card'>
              <img className="boardgame-img card-img-top" src={boardGames.image_url} alt={boardGames.name}/>
              <div className='card-body'>
                <h5 className="card-title">{boardGames.name}</h5>
                <button type="button" className=" details-btn" data-toggle="modal" data-target={`#${boardGames._id}ModalCenter`}>Details
                </button>
                <div className="modal fade" id={`${boardGames._id}ModalCenter`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{boardGames.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {boardGames.description ? 
                          <p>{removeTags(boardGames.description)}</p>
                          : 
                          <p>Details coming soon</p>
                        }
                        <br /> 
                        {boardGames?.year_published ? 
                          <p>Year Published: <span>{boardGames.year_published}</span></p> 
                          :
                          <p>TBA</p>
                        }
                      </div>
                      <div>
                        <div>
                          <p>{`Players ${boardGames.min_players}-${boardGames.max_players}`}</p>
                          <p>{`Playtime: ${boardGames.min_playtime}-${boardGames.max_playtime} min`}</p>
                        </div>
                        <div>
                          <a href={boardGames.rules_url} target='blank'>rules</a>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div> :
    <div>No board games yet.</div>}

    </>
  );
}

export default Profile;