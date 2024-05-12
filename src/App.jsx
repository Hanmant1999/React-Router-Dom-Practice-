import './App.css'
import {Routes,Route, Outlet} from "react-router-dom";
import { Navbar } from './Navbar';

function App() {
  return (
    <>
    <Navbar  />
      <h1>Hello , Here I am practising react-route-dom </h1>
      <Outlet />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </>
  )
}

export default App
