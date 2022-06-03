import React from 'react';
import './App.scss';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CallsPage } from './components/callsPage';
import { Sidebar } from "./components/global/Sidebar";

function App() {

  return (
    <div className="app">
      <div className='navMenu'>
          <Sidebar/>
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
