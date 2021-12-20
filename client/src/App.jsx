import './App.css';
import FormDeveloperTest from './pages/FormDeveloperTest/FormDeveloperTest';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/form-developer-test" element={<FormDeveloperTest />}/>
      </Routes>
  );
}

export default App;
