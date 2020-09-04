import React from 'react';

import { Header } from './components/Header/Header.component';
import { SideNav } from './components/SideNav/SideNav.component';

import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <SideNav />
    </div>
  );
}

export default App;
