import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import ChatGPTApp from './features/ChatGPTApp';
import Explore from './features/Explore';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="AppContainer">
        <nav>
          <div className='links-container'>
            <div className="link-container">
              <Link to="/">Explore</Link>
            </div>
            <div className="link-container">
              <Link to="/chat">ChatGPTApp</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/chat" element={
            <div className="frame">
              <ChatGPTApp />
            </div>
          } />
          <Route path="/" element={
            <div className="frame">
              <Explore />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
