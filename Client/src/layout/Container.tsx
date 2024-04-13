// import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import './container.scss'
// import AboutUs from '../pages/AboutUs';

const Container = () => {
  return (
    <div className="my-elements">
      <div className="navbar">
        <Navbar />
      </div>
      {/* <div className="centerpiece">
        <Routes>
          <Route path="/adminboard" element={<AboutUs />} />
          
        </Routes>
      </div> */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Container