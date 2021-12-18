import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetail({ products }) {
  let params = useParams();
  const product = products.find((p) => p.id === Number(params.productId));
  console.log('renders from product detail');

  if (product) {
    return (
      <>
        <div className="product__detail">
          <h2>{product ? product.title : null}</h2>

          <div>
            <Rating
              size={`1.25rem`}
              initialValue={Math.round(product.rating.rate)}
              readonly={true}
            />
            {product.rating.count} reviews
          </div>
          <img src={product.image} />

          <h2>Price: $ {product.price}</h2>

          <h3>Description</h3>
          <p>{product.description}</p>
          <div>
            <FontAwesomeIcon icon={faTag} /> {product.category}
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
