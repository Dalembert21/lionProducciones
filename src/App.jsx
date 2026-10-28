import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import GlobalScripts from './GlobalScripts';
import './index.css';

function App() {
  return (
    <>
      <GlobalScripts />
      <Header />
      <main>
        <Main />
        <Gallery />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
