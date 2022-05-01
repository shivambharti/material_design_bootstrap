import './App.css';
import Login from "./pages/Login";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>} ></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;