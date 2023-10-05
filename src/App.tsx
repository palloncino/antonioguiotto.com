import React, { useEffect, useRef, useState } from 'react';
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
  const [featureHeight, setFeatureHeight] = useState(0);

  useEffect(() => {
    const headerHeight = HeaderRef.current ? HeaderRef.current.offsetHeight : 0;
    const viewportHeight = window.innerHeight;
    const calculatedFeatureHeight = viewportHeight - headerHeight;

    setFeatureHeight(calculatedFeatureHeight);
  }, []);

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
          style={{ height: `${featureHeight}px`, overflowY: 'auto' }}
          ref={FeatureRef}>
          <Routes>
            <Route path="/chat-up" element={<ChatUp parentRef={FeatureRef} />} />
            <Route path="/" element={<Explore />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
