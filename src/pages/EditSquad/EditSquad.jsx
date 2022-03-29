import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

const EditSquad = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.squad)
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
		const squadFormData = new FormData()
		squadFormData.append('name', formData.name)
		squadFormData.append('avatar', formData.avatar)
		squadFormData.append('_id', formData._id) 
		props.handleEditSquad(squadFormData)
	}

	const handleChangeAvatar = (evt) => {
		setFormData({...formData, avatar: evt.target.files[0]})
	}

	return (
		<>
			<h1>Edit Squad</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Squad's Name (required)
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
					<label htmlFor="avatar-upload" className="form-label">
						Change Avatar
					</label>
					<input
						type="file"
						className="form-control"
						id="avatar-upload"
						name="avatar"
						onChange={handleChangeAvatar}
					/>
				</div>
				<div className="d-grid mb-3">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Save Squad
					</button>
				</div>
        <div className="d-grid">
					<Link
						to={`/squad/${location.state.squad._id}/`}
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
				</div>
			</form>
		</>
	)
}

export default EditSquad