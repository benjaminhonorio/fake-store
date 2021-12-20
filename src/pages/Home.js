import ProductCard from '../components/ProductCard';

export default function Home({ products, loading }) {
  return (
    <>
      <h2>Products</h2>
      <div className="products">
        {loading && 'Cargando productos...'}
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </>
  );
}
