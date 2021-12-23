import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  // Get counter for specific product from localStorage
  const [count, setCount] = useState(Number(localStorage.getItem(`${product.id}`)));

  // Keep running the timer and updating the localStorage on every count change
  // till set to 0
  useEffect(() => {
    if (count === 0) {
      localStorage.setItem(`${product.id}`, '0');
      return;
    } else {
      const id = setInterval(() => {
        setCount(count - 1);
      }, 1000);
      localStorage.setItem(`${product.id}`, `${count}`);
      return () => {
        clearInterval(id);
      };
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
