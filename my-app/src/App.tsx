import React from 'react';
import './App.scss';
import { Route, Routes} from "react-router-dom";
import { Sidebar } from "./components/global/Sidebar";
import { Header } from "./components/global/Header"; 
import { routes } from './services/routes';

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
            {routes.map((e) => (
              <Route path={e.path} key={e.path} element={e.component}/>
            ))}
          </Routes>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
