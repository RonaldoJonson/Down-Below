import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Hero} from './Components/Pages/Hero';

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/Down-Below" element={<Hero/>} />
        </Routes>
      </BrowserRouter>
    )
}
  
export default Router;