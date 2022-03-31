import './Landing.css'
import { NavLink } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <main className='landing-main'>
      <div className='landing-container'>
        {user 
        ? 
        <div className='landing-users'>
          <h3>Welcome to TBD the web app that helps you and your squad decide what to do, because indecision happens. Whether it's a movie night, game night, or video games with your friends sometime we all just need a little help.</h3>
        </div>
        : 
        <div className='landing-no-users'>
          <h3>Welcome to TBD the web app that helps you and your squad decide what to do, because indecision happens. Whether it's a movie night, game night, or video games with your friends sometime we all just need a little help.</h3> 
          <div className='landing-login'>
            {<NavLink className="nav-link" to="/login">Log In</NavLink>} 
          </div>
          <div className='landing-signup'>
            {<NavLink className="nav-link" to="/signup">Sign Up</NavLink>}
          </div>
        </div>
        }
      </div>
    </main>
  )
}

export default Landing
