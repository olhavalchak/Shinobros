import React from'react';
import { Home, Story, StoryNext } from './pages';
import { Navbar } from './components/Navbar';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
function App() {
  return (
    <div className='home-container'>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/story' element={<Story />} />
        <Route path='/next' element={<StoryNext />} />
        {/* <Route path={book.login} element={<LogInPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
