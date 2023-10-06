import React, { useRef } from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import ChatUp from './features/ChatUp';
import Explore from './features/Explore';

const App: React.FC = () => {

  const HeaderRef = useRef<HTMLDivElement | null>(null);
  const FeatureRef = useRef<HTMLDivElement | null>(null);

  return (
    <Router>
      <div className="AppContainer">

        <div 
          className="Header" 
          id="Header" 
          ref={HeaderRef}>
          <div className='links-container'>
            <div className="link-container">
              <Link to="/">Explore</Link>
            </div>
            <div className="link-container">
              <Link to="/chat-up">Chat up</Link>
            </div>
          </div>
        </div>

        <div
          className="Feature"
          id="Feature"
          ref={FeatureRef}>
          <Routes>
            <Route path="/chat-up" element={<ChatUp headerRef={HeaderRef} parentRef={FeatureRef} />} />
            <Route path="/" element={<Explore />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
