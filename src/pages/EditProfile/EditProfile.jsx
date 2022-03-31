import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

const EditProfile = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.profile)
  const [validForm, setValidForm] = useState(true)
  const formElement = useRef()

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
		const profileFormData = new FormData()
		profileFormData.append('name', formData.name)
		profileFormData.append('photo', formData.photo)
		profileFormData.append('_id', formData._id)
		props.handleEditProfile(profileFormData)
	}

  const handleChangePhoto = (evt) => {
		setFormData({...formData, photo: evt.target.files[0]})
	}

  return (  
    <>
			<h1>Edit Profile</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Profile Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="photo-upload" className="form-label">
						Change Photo
					</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div>
				<div className="d-grid mb-3">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Save Profile
					</button>
				</div>
        <div className="d-grid">
					<Link
						to={`/profile/${location.state.profile._id}/`}
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
			</form>
		</>
  );
}
 
export default EditProfile;