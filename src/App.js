import React from 'react';

import { Header } from './components/Header/Header.component';
import { SideNav } from './components/SideNav/SideNav.component';
import { Feed } from './components/Feed/Feed.component';

import './App.css';

function App() {
  return (
    <div className="app">
        <Header />
        <div className = 'app__body'>
            <SideNav />
            <Feed />
        </div>
    </div>
  );
}

export default App;
