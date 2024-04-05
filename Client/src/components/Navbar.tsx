import './navbar.scss'
import logo from '../assets/pcea-logo.jpg'


const Navbar = () => {
  return (
      <div className="navbar-container">
          <div className="navbar-logo">
              <img src={logo} alt="logo"  />
          </div>
    </div>
  )
}

export default Navbar