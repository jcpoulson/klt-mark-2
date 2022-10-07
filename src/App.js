import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

// Page Components
import Home from './components/Home/Home';

// Components
import Header from "./components/Global/Header";
import Select from './components/Practice/Select';
import Practice from "./components/Practice/Practice";
import Create from "./components/Create/Create";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/practice/:level" element={<Practice />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
