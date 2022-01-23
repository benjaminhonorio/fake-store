import { createContext } from 'react';
import useAxios from '../hooks/useAxios';
import useCounters from '../hooks/useCounters';

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [products, loading, error] = useAxios('https://fakestoreapi.com/products');
  const [counters] = useCounters(products);

  return (
    <StoreContext.Provider value={{ products, loading, error, counters }}>
      {children}
    </StoreContext.Provider>
  );
};
