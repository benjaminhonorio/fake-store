import { Link } from 'react-router-dom';
import { formatTime } from '../utils';

export default function ProductCard({ product, count }) {
  return (
    <>
      <div className="productCard">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <div className="productCallToAction">
          <span>{formatTime(count)}</span>
          <Link
            className={`${!count && 'disabled'}`}
            to={`/products/${product.id}`}
            key={product.id}>
            {`${!count ? 'Too late' : ' Go to Detail'}`}
          </Link>
        </div>
      </div>
    </>
  );
}
