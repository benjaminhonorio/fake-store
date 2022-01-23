import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import AppNavBar from './components/AppNavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:productId" element={<ProductDetail />} />
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
