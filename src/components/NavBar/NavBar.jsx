import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">TBD</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02"></div>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className='nav-link'>Welcome, {user.name}</li>
            <li className="nav-item"><Link className='nav-link' to="/allmedia">All Media</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/squads">Squads</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/profiles">Profiles</Link></li>
            <li className="nav-item"><Link className='nav-link' to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
