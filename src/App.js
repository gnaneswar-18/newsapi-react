import React from 'react';
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/health' element={<News  key='health' category='health' />} />
        <Route path='/science' element={<News key='science'  category='science' />} />
        <Route path='/' element={<News key='general' category='general' />} />
        <Route path='/business' element={<News key='business' category='business' />} />
        <Route path='/entertainment' element={<News key='entertainment'category='entertainment' />} />
        <Route path='/technology' element={<News key='technology' category='technology' />} />
        <Route  path='/sports' element={<News key='sports' category='sports' />} />
      </Routes>
    </Router>
  );
}
  
export default App;
