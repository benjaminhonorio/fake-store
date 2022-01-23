import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

export default function ProductDetail() {
  let id = useParams().productId;
  const { products, loading, error } = useContext(StoreContext);
  const product = products?.find((p) => p.id === Number(id));

  return (
    <>
      <div className="productDetail">
        {loading ? (
          'Loading product...'
        ) : (
          <>
            <div>
              <img src={product.image} />
            </div>
            <div>
              <h2>{product && product.title}</h2>
              <h2>Price: $ {product.price}</h2>
              <div>
                <Rating
                  size={`1.25rem`}
                  initialValue={Math.round(product.rating.rate)}
                  readonly={true}
                />
                {product.rating.count} reviews
              </div>
              <h3>Description</h3>
              <p>{product.description}</p>
              <div>
                <FontAwesomeIcon icon={faTag} /> {product.category}
              </div>
            </div>
          </>
        )}
        {error && <h1>{error}</h1>}
      </div>
    </>
  );
}
