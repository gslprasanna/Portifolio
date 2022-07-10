import React,{useState} from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main'
import Section from './components/Section'
import Works from './components/Works';
import Study from './components/Study';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Section/>
      <Study/>
      <Skills/>
      <Works/>
    </div>
  );
}

export default App;
