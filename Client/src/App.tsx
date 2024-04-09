import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Container from './layout/Container'
import AboutUs from './pages/AboutUs'


function App() {


  return (
    <>
      <Routes>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
      <Container />
    </>
  );
}

export default App
