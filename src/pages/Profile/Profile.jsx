import { useParams } from 'react-router-dom'
import { getProfile } from '../../services/profileService'
import { useState, useEffect } from 'react'

const Profile = () => {
  const [profile, setProfile] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getProfile(id)
      .then(profileData => {
        setProfile(profileData)
      })
  }, [id])
  console.log(profile.movie);
  
  return (
    <>
      <div>
      <h3>{profile.name}</h3>
      </div>
      <div>
        <h3>Movie list</h3>
          {profile.movie?.map((movies, index) =>
              <div className='card-container' key={movies.title}>
                <div  className='card'>
                <img className="card-img-top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movies.poster_path}`} alt={movies.title}/>
                <div className='card-body'>
                  <h5 className="card-title">{movies.title}</h5>
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Details
                  </button>
                  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">{movies.title}</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          {movies.overview} 
                          <br /> 
                          Release date: <span>{movies.release_date}</span>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </>
  );
}

export default Profile;
