import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

// Page Components
import Home from './components/Home/Home';

// Components
import Header from "./components/Global/Header";
import Practice from "./components/Practice/Practice";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </div>
  );
}

export default App;
