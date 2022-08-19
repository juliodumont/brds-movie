import Routes from './Routes'
import './App.css'
import { AuthContext, AuthContextData } from './util/authentication';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });
  
  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
      <ToastContainer />
    </AuthContext.Provider>
  )
}

export default App
