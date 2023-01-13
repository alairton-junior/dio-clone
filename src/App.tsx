import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Teste from './pages';
import { AuthContextProvider } from './context/auth';

function App() {
  return (
    
      <Router>
        <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/teste" element={<Teste/>}/>
        </Routes>
        </AuthContextProvider>
      </Router>
    
  );
}

export default App;
