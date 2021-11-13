import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Hero} from './Components/Pages/Hero';

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Hero/>} />
        </Routes>
      </BrowserRouter>
    )
}
  
export default Router;