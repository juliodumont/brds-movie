import Routes from './Routes'
import './App.css'
import { AuthContext, AuthContextData } from './util/authentication';
import { useState } from 'react';

function App() {

  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });
  
  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
    </AuthContext.Provider>
  )
}

export default App
