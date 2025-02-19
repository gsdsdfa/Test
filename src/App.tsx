// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Doctors from './components/Doctors';
import Nurses from './components/Nurses';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Медучреждение</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">Врачи</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nurses">Медсестры</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/nurses" element={<Nurses />} />
        <Route path="/" element={<h1>Добро пожаловать в систему учета работников медучреждения</h1>} />
      </Routes>
    </Router>
  );
};

export default App;