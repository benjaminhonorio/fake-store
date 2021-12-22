import ProductCard from '../components/ProductCard';

export default function Home({ products, loading }) {
  // Check if products are loaded and if timers are not setup in localStorage
  // If both conditions met, then setup the timers in localStorage for every product
  // use product ids as keys and a random number as value
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
