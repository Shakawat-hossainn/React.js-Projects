import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container ">
        <Routes>
          <Route exact path="/Home" key="general" element={<News category="general" />} />
          <Route exact path="/Business" key="business" element={<News category="business" />} />
          <Route exact path="/Entertainment" key="entertainment" element={<News category="entertainment" />} />
          <Route exact path="/Health" key="health" element={<News category="health" />} />
          <Route exact path="/Science" key="science" element={<News category="science" />} />
          <Route exact path="/Sports" key="sports" element={<News category="sports" />} />
          <Route exact path="/Technology" key="technology" element={<News category="technology" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
