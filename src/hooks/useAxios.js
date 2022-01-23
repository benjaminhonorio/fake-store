import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = () => {
    setLoading(true);
    setResponse([]);
    setError(null);
    const fetchURL = async () => {
      try {
        const { data } = await axios.get(url);
        setResponse(data);
      } catch (error) {
        setError('There was an error fetching the data');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchURL();
  };

  useEffect(loadProducts, []);

  return [response, loading, error];
};

export default useAxios;
