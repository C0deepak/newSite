import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Glimpse from './pages/Glimpse';
import Blog from './pages/Blog';
import './components/style.css'
import Footer from './components/Footer';
// import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({duration: 500})
  }, [])

  return (
    <>
      <Router>
        <Navbar/>
        <div className="main">
          <Routes>
            <Route path='/' element={<Home/>} exact></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/glimpse' element={<Glimpse/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
