import React from 'react';
import "./Style/landingpage.css"
import Albums from './component/Album/main.album';
import MainLayouts from './component/Layouts/main.layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from './component/Posts/main.posts';
import Homepage from './component/Homepage/homepage';




const App = () => {
  return (
    <div className="myBG">
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<h1 className="text-center text-danger">404 NOT FOUND</h1>} />
          </Routes>
        </Router>
      </MainLayouts>
    </div>
  )
  
}


export default App;
