import { useState, useRef, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

function CreateSquad(props) {
	const navigate = useNavigate()
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
  })

  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

	const handleSubmit = evt => {
    evt.preventDefault()
    const squadFormData = new FormData()
    squadFormData.append('name', formData.name)
    squadFormData.append('avatar', formData.avatar)
    props.handleAddSquad(squadFormData)
		navigate('/squads')
  }

	const handleChangePhoto = (evt) => {
		setFormData({...formData, avatar: evt.target.files[0]})
	}

	return (
		<>
			<h1>Add Squad</h1>
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
						Upload Photo
						</label>
						<input
						type="file"
						className="form-control"
						id="avatar-upload"
						name="avatar"
						onChange={handleChangePhoto}
						/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Squad
					</button>
				</div>
			</form>
		</>
	)
}

export default CreateSquad