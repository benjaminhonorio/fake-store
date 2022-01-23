import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import Error from '../components/Error';

export default function Home() {
  const { products, loading, error, counters } = useContext(StoreContext);
  return (
    <>
      <h2>Products</h2>
      <div className="products">
        {loading && 'Loading products...'}
        {products.map((product, i) => {
          return <ProductCard key={product.id} product={product} count={counters[i]} />;
        })}
        {error && <Error text={error} />}
      </div>
    </>
  );
}
