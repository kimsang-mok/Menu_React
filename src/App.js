import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { Routes, Route } from "react-router-dom"
import Customize from './components/Customize';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route exact path="/items/" element={<h1>Nothing Here</h1>} />
      <Route path="/items/:id" element={<Customize />} />
    </Routes>
  );
}

export default App;
