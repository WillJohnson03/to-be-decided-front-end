import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">TBD</NavLink>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active nav-link">Welcome, {user.name}</li>
              <li className='nav-item'>
                <NavLink className="nav-link" to='/allmedia'>All Media <span className='sr-only'>(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="/squads">Squads</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="/profiles">Profiles</NavLink></li>
              <li className="nav-item">
                <NavLink className='nav-link' to="" onClick={handleLogout}>LOG OUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="/changePassword">Change Password</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <ul>
            <li><NavLink to="/login">Log In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
