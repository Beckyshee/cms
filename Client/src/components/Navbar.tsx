import './navbar.scss'
import logo from '../assets/pcea-logo.jpg'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/about-us");
  }
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
        <ul>
          <li onClick={handleHomeClick}>
            About
            <ul>
              <li>
                <a href="#">Who we are</a>
              </li>
              <li>
                <a href="#">Leadership Structure</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Groups</a>
            <ul>
              <li>
                <a href="#">Women's Guild</a>
              </li>
              <li>
                <a href="#">Youth</a>
              </li>
              <li>
                <a href="#">Children Ministry</a>
              </li>
              <li>
                <a href="#">Brigade</a>
              </li>

              <li>
                <a href="#">Districts</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Announcements</a>
          </li>
          <li>
            <a href="#">Sermons</a>
          </li>
          <li>
            <a href="#">Missions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar