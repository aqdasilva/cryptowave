import React from 'react';
import { Routes, Route} from 'react-router-dom';
import MainPage from './Crypto/MainCryptoPage';


function App() {
  // const location = useLocation();

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

export default App;