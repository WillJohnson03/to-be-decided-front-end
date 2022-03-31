import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ChangePasswordForm.css'
import * as authService from '../../services/authService'

const ChangePasswordForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pw: '',
    newPw: '',
    newPwConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.changePassword(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { pw, newPw, newPwConf } = formData

  const isFormInvalid = () => {
    return !(pw && newPw && newPw === newPwConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='change-password-form'
    >
      <div className='old-password-container'>
        <label htmlFor="password" className='old-password-label'>Current Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div className='new-password-container'>
        <label htmlFor="newPassword" className='new-password-label'>
          New Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="newPassword"
          value={newPw}
          name="newPw"
          onChange={handleChange}
        />
      </div>
      <div className='new-password-container'>
        <label htmlFor="newPasswordConf" className='new-password-label'>
          Confirm New Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="newPasswordConf"
          value={newPwConf}
          name="newPwConf"
          onChange={handleChange}
        />
      </div>
      <div className='btn-container'>
        <button disabled={isFormInvalid()} className='change-password-btn'>
          Change Password
        </button>
        <Link to="/">
          <button className='cancel-btn'>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default ChangePasswordForm
