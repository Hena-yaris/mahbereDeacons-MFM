import React from "react"
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import AdminPage from "./pages/AdminPage";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path ="/admin" element= {<AdminPage/>}/>
    </Routes> 
    </>
  )
}

export default App
