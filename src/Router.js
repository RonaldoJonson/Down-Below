import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Home} from './Components/Pages/Home/Home';
import { UserPage } from './Components/Pages/UserPage';

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/User" element={<UserPage/>} />
        </Routes>
      </BrowserRouter>
    )
}
  
export default Router;