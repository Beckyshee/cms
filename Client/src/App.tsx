import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Container from './layout/Container'
import AboutUs from './pages/AboutUs'
import Leadership from './pages/Leadership';


function App() {


  return (
    <>
      <Container />
      <Routes>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/leadership" element={<Leadership />}></Route>
      </Routes>
    </>
  );
}

export default App
