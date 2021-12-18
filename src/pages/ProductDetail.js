import { useParams } from 'react-router-dom';

export default function ProductDetail({ products }) {
  let params = useParams();
  const product = products.find((p) => p.id === Number(params.productId));
  console.log('renders from product detail');
  if (product) {
    return (
      <>
        <h1>{product ? product.title : null}</h1>
        <p>
          {product.rating.rate} from {product.rating.count} reviews
        </p>
        <p>{product.category}</p>
        {/* <img src={product.image} /> */}
        <p>Price: $ {product.price}</p>
        <h2>Description</h2>
        <p>{product.description}</p>
      </>
    );
  } else {
    return null;
  }
}
