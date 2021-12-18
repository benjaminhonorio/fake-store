import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [products, setProducts] = useState([]);

  const dataHook = () => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data);
    });
  };
  useEffect(dataHook, []);

  console.log('renders from App');

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
          <Link to="/about">
            <FontAwesomeIcon icon={faUserCircle} />
            <span>About me</span>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home products={products} />}></Route>
          <Route path="/products/:productId" element={<ProductDetail products={products} />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There&apos;s nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
