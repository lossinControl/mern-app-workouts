import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
// import User from './components/User';
import { ImageUpload } from './components/ImageUpload';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { NotFound } from './pages/NotFound';


document.body.style.backgroundColor = 'black';

function App() {

  const {user} = useAuthContext();

  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={ user ? <Home /> : <Navigate to='/login' /> } />
            {/* <Route path='/users' element={<User />} /> */}
            <Route path='/login' element={ !user ? <Login /> : <Navigate to="/" /> } />
            <Route path='/signup' element={ !user ? <Signup /> : <Navigate to='/' /> } />
            <Route path='/image' element={<ImageUpload />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
