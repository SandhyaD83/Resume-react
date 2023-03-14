// import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education'
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>

    </div>
  );
}

export default App;
