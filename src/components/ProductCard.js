import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [count, setCount] = useState(Math.floor(Math.random() * 150));

  useEffect(() => {
    if (count === 0) return;
    else {
      const id = setInterval(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [count]);

  const minutes = Math.floor(count / 60);
  const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
  const seconds = count % 60;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <>
      <div className="product__card">
        <img src={product.image} />
        <h3>{product.title}</h3>
        <div className="product__callToAction">
          <span>{`00:${minutesDisplay}:${displaySeconds}`}</span>
          <Link
            className={`${!count ? 'disabled' : null}`}
            to={`/products/${product.id}`}
            key={product.id}>
            {`${!count ? 'Too late' : ' Go to Detail'}`}
          </Link>
        </div>
      </div>
    </>
  );
}
