import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { RedirectToSignIn, SignedOut } from '@clerk/clerk-react'


const ClerkProtected = ({ children }) => {
  <>
  <SignedIn>
    {children}
  </SignedIn>
  <SignedOut>
    <RedirectToSignIn />
  </SignedOut>
  </>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* it must be a protected route */}
      
    </Routes>
  );
};

export default App
