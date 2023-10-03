import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import ChatGPTApp from './features/ChatGPTApp';
import './App.css';

const ExplorePage: React.FC = () => {
  return <div>Explore Page</div>;
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="AppContainer">
        <nav>
          <ul>
            <li>
              <Link to="/">Explore</Link>
            </li>
            <li>
              <Link to="/chat">ChatGPTApp</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/chat" element={
            <div className="frame">
              <ChatGPTApp />
            </div>
          } />
          <Route path="/" element={
            <div className="frame">
              <ExplorePage />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
