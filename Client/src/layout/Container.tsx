import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import './container.scss'
import Landing from '../pages/Landing';
import AboutUs from '../pages/AboutUs';
import Leadership from '../pages/Leadership';
// import AboutUs from '../pages/AboutUs';

const Container = () => {
  return (
    <div className="my-elements">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="centerpiece">
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Container