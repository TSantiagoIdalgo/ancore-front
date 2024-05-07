import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './features/home/index';
import { Header } from './features/core';

import './App.css';

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
