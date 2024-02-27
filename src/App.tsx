import React, { createContext, useRef } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Explore from './features/Explore';
import Header from './components/Header';

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
        <Header />
        <div className="AppContainer">
          <div
            className="Feature"
            id="Feature"
            ref={FeatureRef}>
            <Routes>
              <Route path="/" element={<Explore />} />
            </Routes>
          </div>

        </div>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
