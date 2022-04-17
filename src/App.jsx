import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

const PrivateRoute = ({isAuthenticated, children})=>{
   return isAuthenticated?children:<Navigate to={'/login'}/>
}

function App() {
  const {isAuthenticated}=useSelector((store)=>store.login);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Home/>
          </PrivateRoute>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/add-teacher' element={''}/>
      </Routes>
    </div>
  );
}

export default App;
