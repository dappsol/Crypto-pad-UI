import {BrowserRouter, Routes, Route} from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/scss/main.scss";

import HomePage from './pages/HomePage.jsx'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
