
import './App.css'
import {Route,Routes} from "react-router-dom"
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar/Navbar'
import Gallery from "./Components/Pages/Gallery"
import Shop from "./Components/Pages/Shop"
import Contact from "./Components/Pages/Contact"
import Hero from './Components/Pages/Hero'
import Footer from "./Components/Footer/Footer"


function App() {
 
  return (
    <>
    <div className="">
  <Navbar/>
  <Routes>
 
  <Route path="/furniture-website" element={<Hero/>}/>
  <Route path="/" element={<Hero/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/contact" element={<Contact/>}/>
  
  </Routes>
  <Footer/>
    </div>
    </>
  )
}

export default App;
