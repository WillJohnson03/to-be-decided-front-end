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
  return (
    <>
      <h1>Test</h1>
    </>
  )
}

export default EditSquad