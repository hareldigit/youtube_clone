import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import RecommendedVideos from './Components/RecommendedVideos/RecommendedVideos';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__page">
        <Sidebar/>
        <RecommendedVideos/>
      </div>
    </div>
  );
}

export default App;
