import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetail({ products }) {
  let id = useParams().productId;
  const product = products?.find((p) => p.id === Number(id));

  // Keep running the counters
  useEffect(() => {
    const id = setInterval(() => {
      // Only decrease if they are not already set to 0
      Object.entries(localStorage)
        .filter(([key, value]) => Number(value) !== 0)
        .forEach(([key, value]) => {
          localStorage.setItem(key, Number(value) - 1);
        });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  if (product) {
    return (
      <>
        <div className="product__detail">
          <div>
            <img src={product.image} />
          </div>

          <div>
            <h2>{product ? product.title : null}</h2>
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
        </div>
      </>
    );
  } else {
    return null;
  }
}
