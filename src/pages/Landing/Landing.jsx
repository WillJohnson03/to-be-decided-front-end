import styles from './Landing.module.css'
import { NavLink } from 'react-router-dom'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <div>
        {user 
        ? 
        <h1>Welcome to TBD the web app that helps you and your squad decide what to do, because indecision happens. Whether it's a movie night, game night, or video games with your friends sometime we all just need a little help.</h1>
        : 
        <h1>Welcome to TBD the web app that helps you and your squad decide what to do, because indecision happens. Whether it's a movie night, game night, or video games with your friends sometime we all just need a little help. {<NavLink className="nav-link" to="/login">Log In</NavLink>} or {<NavLink className="nav-link" to="/signup">Sign Up</NavLink>}</h1>
        }
      </div>
    </main>
  )
}

export default Landing
