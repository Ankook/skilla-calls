import React from 'react';
import './App.scss';
import { Route, Routes} from "react-router-dom";
import { CallsPage } from './components/pages/callsPage';
import { Sidebar } from "./components/global/Sidebar";
import { Header } from "./components/global/Header"; 

function App() {

  return (
    <div className="app">
      <div className='sidebar'>
          <Sidebar/>
      </div>
      <div className='content'>
        <div className='header'>
          <Header/>
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<CallsPage/>}/>
          </Routes>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
