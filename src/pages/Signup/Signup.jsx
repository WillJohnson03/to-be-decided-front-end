import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='signup-form-main'>
      <div className='signup-container'>
        <div className='signup-msg-container'>
          <h1 className='signup'>Sign Up</h1>
          <p className='msg'>{message}</p>
        </div>
        <div className='signup-form'>
          <SignupForm {...props} updateMessage={updateMessage} />
        </div>
      </div>
    </main>
  )
}

export default Signup
