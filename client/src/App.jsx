import './App.css';
import FormDeveloperTest from './pages/FormDeveloperTest/FormDeveloperTest';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<h1>welcome</h1>}/>
        <Route path="/form-developer-test" element={<FormDeveloperTest />}/>
      </Routes>
  );
}

export default App;
