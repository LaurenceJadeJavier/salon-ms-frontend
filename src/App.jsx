import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Sidebar from './components/view/Sidebar'
import Dashboard from './components/view/components/dashboard'
import Inventory from './components/view/components/inventory'
import Staff from './components/view/components/Staff'
import Home from './components/clientside/home'
import AdminSignUp from './components/AdminSignup'
import AdminSignIn from './components/AdminSignin'
import ClientSignup from './components/clientside/ClientSignup'
import ClientSignin from './components/clientside/ClientSignin'
import SignUp from './components/test'
import Salon from './components/clientside/salon'
import Profile from './components/view/components/profile'
import Services from './components/view/components/services'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        
        <Route path="/AdminSignup" element={<AdminSignUp />} />
        <Route path="/AdminSignin" element={<AdminSignIn />} />
        <Route path="/ClientSignup" element={<ClientSignup />} />
        <Route path="/ClientSignin" element={<ClientSignin />} />
        <Route path="/lyrics" element={<SignUp/>} />

        <Route path="/sidebar/*" element={<Sidebar />}>
          {/* Use index route for Dashboard */}
          <Route index element={<Dashboard />} />
          {/* Use separate route for Inventory */}
          <Route path="inventory" element={<Inventory />} />
          <Route path="staff" element={<Staff/>} />
          <Route path="services" element={<Services/>}/>
          <Route path="profile" element={<Profile/>}/>
          
        </Route>
        {/* client Routings */}
        <Route path="/client/home" element={<Home />} />
        <Route path="/salon/:id" element={<Salon/>} />
      </Routes>
    </div>
  )
}

export default App
