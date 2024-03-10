import React from 'react';
import ReactDOM from 'react-dom';
import { Navigate, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './styles/index.css';
import './styles/styles.scss';
import { AboutPage, HomePage } from './pages';

const NotFoundPage = () => {
  return <Navigate to="/" replace />;
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
