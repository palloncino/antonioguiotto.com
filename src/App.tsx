import React, { useRef } from 'react';
import {
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
