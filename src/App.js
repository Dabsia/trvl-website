import React from 'react';
// import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import NotFound from './pages/NotFound/NotFound';


const App = () =>  {
  return (
      <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/services' element = {<Services/>} />
          <Route path = '/products' element = {<Products/>} />
          {/* For a not found route */}
          <Route path = '*' element = {<NotFound/>} />
      </Routes>
  );
} 

export default App;
