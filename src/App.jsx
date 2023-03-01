import React, { useState } from 'react';
import LandingPage from "./components/LandingPage"
import './style/App.css'


function App() {
  const [data, setData] = useState("");

  console.log(data)

  return (
    <>
      <LandingPage setData={setData}/>
     
     
    </>
  
  
  )
}

export default App
