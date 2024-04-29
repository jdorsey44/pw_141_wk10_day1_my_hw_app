import React from 'react';
import './style.css';
import LandingPage from './components/LandingPage';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;