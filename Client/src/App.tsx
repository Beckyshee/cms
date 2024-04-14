import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Container from './layout/Container'
// import AboutUs from './pages/AboutUs'
// import Leadership from './pages/Leadership';
import Pcmf from './pages/Pcmf';
import Guild from './pages/Guild';
import Districts from './pages/Districts';
import Youth from './pages/Youth';
import Brigade from './pages/Brigade';
import ChildrenMinistry from './pages/ChildrenMinistry';
import Sermons from './pages/Sermons';
import Missions from './pages/Missions';
import Announcements from './pages/Announcements';



function App() {


  return (
    <>
      <Container />
      <Routes>
        {/* <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/leadership" element={<Leadership />}></Route> */}

        <Route path="/pcmf" element={<Pcmf />}></Route>
        <Route path="/guild" element={<Guild />}></Route>
        <Route path="/districts" element={<Districts />}></Route>
        <Route path="/kids" element={<ChildrenMinistry />}></Route>
        <Route path="/youth" element={<Youth />}></Route>
        <Route path="/brigade" element={<Brigade />}></Route>

        <Route path="/sermons" element={<Sermons />}></Route>
        <Route path="/missions" element={<Missions />}></Route>
        <Route path="/announcements" element={<Announcements />}></Route>
      </Routes>
    </>
  );
}

export default App
