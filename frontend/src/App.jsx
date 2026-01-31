import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { RedirectToSignIn, SignedOut } from '@clerk/clerk-react'
import { SignedIn } from '@clerk/clerk-react'
import AppShell from './components/AppShell'
import Dashboard from './pages/Dashboard'
import CreateInvoice from './pages/CreateInvoice'
import Invoices from "./pages/Invoices";
import InvoicePreview from './components/InvoicePreview'
import BusinessProfile from './pages/BusinessProfile.jsx'




const ClerkProtected = ({ children }) => (
  <>
  <SignedIn>
    {children}
  </SignedIn>
  <SignedOut>
    <RedirectToSignIn />
  </SignedOut>
  </>
);

const App = () => {
  return (
    <div className='min-h-screen max-w-full overflow-x-hidden'>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* it must be a protected route */}
      <Route path="/app" element={<ClerkProtected>
        <AppShell/>
      </ClerkProtected>}>
      <Route index element={<Dashboard/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="invoices" element={<Invoices/>}/>
      <Route path="invoices/new" element={<CreateInvoice/>}/>
      <Route path="invoices/:id" element={<InvoicePreview/>}/>
      <Route path="invoices/:id/preview" element={<InvoicePreview/>}/>
      <Route path="invoices/:id/edit" element={<CreateInvoice/>}/>

      <Route path="create-invoice" element={<CreateInvoice />}/>
      <Route path="business" element={<BusinessProfile />}/>
      
      </Route>
    </Routes>
     </div>
  );
};

export default App
