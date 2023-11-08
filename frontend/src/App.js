import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/Home/Home'
import Video from './components/Video/Video';
import Profile from './components/profile/profile';
import LoginPage from './components/Login/LoginPage';


function App() {

  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to="/home" /> : <LoginPage />} />
        <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" />} />
        <Route path="/video" element={isAuth ? <Video /> : <Navigate to="/" />} />
        <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
