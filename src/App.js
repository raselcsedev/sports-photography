
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import Albums from './Pages/Home/Albums/Albums';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='albums' element={<Albums></Albums>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/checkout' element={
        <RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>
      }></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
