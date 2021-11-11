import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <Products />}/>
        </Routes>  
      <Footer />
      </div>
      </Router>
  );
}

export default App;
