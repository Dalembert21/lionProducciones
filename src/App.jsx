import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Gallery from './components/Gallery/Gallery'
import './App.css'
import GlobalScripts from './GlobalScripts.jsx'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import './index.css'
function App() {
 

  return (
    <>
    <GlobalScripts />
   
    <Header />
    <Main />
    <Gallery /> 
    <About />
    <Footer />
     
    </>
  )
}

export default App
