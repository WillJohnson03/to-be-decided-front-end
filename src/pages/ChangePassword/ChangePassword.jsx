import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'
import './ChangePassword.css'

const ChangePassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='container-main'>
      <div className='change-password-container'>
        <div className='change-passwordAndMsg-container'>
          <h1 className='password'>Change Password</h1>
          <p className='msg'>{message}</p>
        </div>
        <div className='change-password-form'>
          <ChangePasswordForm {...props} updateMessage={updateMessage} />
        </div>
      </div>
    </main>
  )
}

export default ChangePassword
