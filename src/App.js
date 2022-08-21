
import './App.css';
import NavBarPage from './Components/NavBar/NavBarPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import bgImg from './Components/Images/bg.jpg';
import { BrowserRouter as Router, Routes, Route, Path } from 'react-router-dom';
import Home from './Components/NavBar/Home';
import Contact from './Components/NavBar/Contact';
import Feature from './Components/NavBar/Features';
import Price from './Components/NavBar/Price';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <NavBarPage />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/features' element={<Feature />} />
          <Route path='/price' element={<Price />} />
          <Route path='/contact' element={ <Contact/>} />
        </Routes>
        <Footer />
      </Router>
   </div>
  )
}
export default App;