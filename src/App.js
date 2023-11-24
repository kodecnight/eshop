
import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Checkout" element={<Checkout/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
