import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainPage from '../Crypto/MainCryptoPage';

function Routez() {
 

  return (
    <> 
    <div className='container'>
      <Routes>
            <Route path="/" element={<MainPage/>} />
            {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </div>
  </>
  )
}

export default Routez;

