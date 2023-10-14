import React, { createContext, useRef } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import ChatUp from './features/ChatUp';
import Explore from './features/Explore';
import Fade from './features/Fade';
import VagabondDiary from './features/VagabondDiary';

export const MainContext = createContext<{
  HeaderRef: React.RefObject<HTMLDivElement>,
  FeatureRef: React.RefObject<HTMLDivElement>
} | null>(null);

const App: React.FC = () => {

  const HeaderRef = useRef<HTMLDivElement | null>(null);
  const FeatureRef = useRef<HTMLDivElement | null>(null);

  return (
    <Router>
      <MainContext.Provider value={{ HeaderRef, FeatureRef }}>
        <div className="AppContainer">
          <div
            className="Feature"
            id="Feature"
            ref={FeatureRef}>
            <Routes>
              <Route path="/chat-up" element={<Fade><ChatUp /></Fade>} />
              <Route path="/vagabond-diary" element={<Fade><VagabondDiary /></Fade>} />
              <Route path="/" element={<Fade><Explore /></Fade>} />
            </Routes>
          </div>

        </div>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
