import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import NewComponent from './Components/NewComponent';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [progress, setProgress] = useState(0);

  const handleProgress = (progressValue) => {
    setProgress(progressValue);
  };

  return (
    <Router>
      <div style={{ backgroundColor: 'red' }}>
        <Navbar s={{ backgroundColor: 'black', color: 'red' }} />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes> 
        <Route path="/" element={<NewComponent key="general" setProgress={handleProgress} pageSize={8} countryName={'us'} c={'general'} ti={"News-App"} />} />
        <Route path="/sports" element={<NewComponent key="sports" setProgress={handleProgress} pageSize={8} countryName={'us'} c={"sports"} ti={"News-App"} />} />
        <Route path="/health" element={<NewComponent key="health" setProgress={handleProgress} pageSize={8} countryName={'us'} c={"health"} ti={"News-App"} />} />
        <Route path="/business" element={<NewComponent key="business" setProgress={handleProgress} pageSize={8} countryName={'us'} c={"business"} ti={"News-App"} />} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
