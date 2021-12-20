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
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return axios.get('https://fakestoreapi.com/products');
  };

  const load = async () => {
    try {
      setLoading(true);
      const { data } = await getProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(load, []);

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
          <Route path="/" element={<Home products={products} loading={loading} />}></Route>
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
