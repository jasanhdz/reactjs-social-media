import React from 'react';
import Header from './components/header'
import TopCardList from './components/top-card-list';
import Overview from './components/overview';
import Switch from './components/switch'

import './globals.css';

function App() {
  return (
    <>
      <Header>
        <Switch />
      </Header>
      <TopCardList />
      <Overview />
    </>
  );
}

export default App;
