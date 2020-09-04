import React from 'react';

import { Header } from './components/Header/Header.component';
import { SideNav } from './components/SideNav/SideNav.component';
import { Stories } from './components/Stories/Stories.component';

import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <SideNav />
        <Stories />
    </div>
  );
}

export default App;
