import './index.css';
import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './pages/Account'
import { AuthContextProvider } from './context/AuthContext'

function App() {

  return (
    <div>
      <AuthContextProvider>
      <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
        
    </div>
    
  );
}

export default App;
