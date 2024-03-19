import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import EspaceClient from './Components/EspaceClient'
import Contact from './Components/Contact';
import Services from './Components/Services';
import Inscription from './Components/Inscription';
import TopBar from './Components/TopBar';
// import Footer from './Components/Footer';
function App() {
 
  return (
    <>
      <BrowserRouter>

        <div className="app">
          {/* <TopBar/>
          <Header /> */}

          <Routes>
             <Route path="/" element={<Home/>} /> 
             <Route path="/About" element={<About/>} />
             <Route path="/Services" element={<Services/>} />
             
            {/* <Route path="/Testimony" element={<Testimony/>} /> */}
            
            <Route path="/login" element={<EspaceClient/>} />  
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="/inscription" element={<Inscription/>} />  
            
          </Routes>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>




    </>
  )
}

export default App
