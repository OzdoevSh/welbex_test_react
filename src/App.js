import './App.css';
import MainPage from './components/MainPage';
import Todos from './components/TodosPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>

        <div className="navbar">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Главная</Link>
          <Link to="/todos" style={{ textDecoration: 'none', color: 'white' }}>Todos</Link>
        </div>

        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/todos" element={<Todos/>}/>
        </Routes>

      </div>
    </Router>

  );
}

export default App;
