import { Route,Routes,Navigate } from 'react-router-dom';
import './App.css';

// components
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/SignUp' element={<SignUp/>}/>
        <Route  path='/' element={<Navigate to="signup" />}/>
        
      </Routes>
    </div>
  );
}

export default App;
