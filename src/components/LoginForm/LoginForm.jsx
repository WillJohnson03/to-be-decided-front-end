import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='login-form-container'
    >
      <div className='email-container'>
        <label htmlFor="email" className='email-label'>Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className='password-container'>
        <label htmlFor="password" className='password-label'>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div className='btn-container'>
        <button className='login-btn'>Log In</button>
        <Link to="/">
          <button className='cancel-btn'>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
