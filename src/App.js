import React from "react";
import MainPage from "./components/MainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ShowDetail from "./components/ShowDetail";

function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="detail" element={<ShowDetail />}/>
      </Routes>
    </Router>

  );
}

export default App;
