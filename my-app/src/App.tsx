import React from 'react';
import './App.scss';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CallsPage } from './components/callsPage';
import { NavMenu } from "./components/global/NavMenu/NavMenu";

function App() {

  return (
    <div className="app">
      <div className='navMenu'>
          <NavMenu/>
      </div>
      <div className='content'>
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<CallsPage/>}/>
        </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
