import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import { Route,Routes} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Team from './Pages/Team';

import Footer from "./Component/Footer"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <Routes>

  <Route path="/" element={<Home></Home>} />
  <Route path="/About" element={<About></About>} />
  <Route path="/Services" element={<Services></Services>} />
  <Route path="/Team" element={<Team></Team>} />

  


</Routes>
<Footer></Footer>
    </>
  )
}

export default App
