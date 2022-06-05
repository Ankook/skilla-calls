import React from 'react';
import './App.scss';
import { useRoutes } from "react-router-dom";
import { Sidebar } from "./components/global/Sidebar";
import { Header } from "./components/global/Header"; 
import { routes } from './services/routes';

function App() {

  let element = useRoutes(routes);

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
          {element}
        </div>
        
      </div>
      
    </div>
  );
  
}

export default App;
