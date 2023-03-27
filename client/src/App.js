import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router } from 'react-router-dom' ;
import Routes from './Routes';
function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />
      <Routes />    

      </Router>
    </div>
  );
}

export default App;
