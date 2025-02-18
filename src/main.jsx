import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '../styles/css/style.css';
import '../styles/css/bootstrap.min.css';
import '../styles/css/font-awesome.min.css';
import '../styles/css/responsive.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)