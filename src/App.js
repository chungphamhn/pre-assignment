import React from "react";
import MainPage from "./components/MainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ShowDetail from "./components/ShowDetail";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<MainPage />} />
        <Route path="detail" element={<ShowDetail />}/>
        <Route path="/search_results" element={<SearchResults />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>

  );
}

export default App;
