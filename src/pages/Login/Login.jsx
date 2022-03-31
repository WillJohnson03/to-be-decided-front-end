import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import'./Login.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='login-main'>
      <div className='login-container'>
        <div className='login-msg-container'>
          <h1 className='login'>Log In</h1>
          <p className='msg'>{message}</p>
        </div>
        <div className='login-form'>
          <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          updateMessage={updateMessage}
          />
        </div>
      </div>
    </main>
  )
}

export default LoginPage
