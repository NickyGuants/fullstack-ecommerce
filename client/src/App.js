import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart'
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>  
      <Footer />
      </div>
      </Router>
  );
}

export default App;
