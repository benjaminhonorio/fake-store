import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
  console.log('renders from Home');
  return (
    <>
      <h2>Products</h2>
      <div>
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </>
  );
}
