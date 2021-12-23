import ProductCard from '../components/ProductCard';

export default function Home({ products, loading }) {
  // Check if counters are not setup in localStorage and if products are loaded
  // If both conditions met, then setup the timers in localStorage for every product
  // use product ids as keys and a random number as value
  // else do nothing
  !localStorage.length && products.length
    ? products.forEach((product) => {
        localStorage.setItem(product.id, Math.floor(Math.random() * 150));
      })
    : null;

  return (
    <>
      <h2>Products</h2>
      <div className="products">
        {loading && 'Loading products...'}
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </>
  );
}
