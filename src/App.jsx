import React from 'react';
import './App.css';
import { Footer, Header, Project, Skills } from './container';
import { Navbar } from './components';

function App() {

  return (
    <div className="app">
      <Navbar />
      <Header />
      <Skills />
      <Project />
      <Footer />
    </div>
  )
}

export default App
