import './navbar.scss'
import logo from '../assets/pcea-logo.jpg'


const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
        <div className="heading">
          <h3>PCEA</h3>
          <h3>RURINGU CHURCH</h3>
        </div>
          </div>
          <div className="navbar-links">
              <a href="#">Home</a>
          </div>
    </div>
  );
}

export default Navbar