import axios from 'axios';
import { useState, useEffect } from 'react';

const useDataApi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = () => {
    setLoading(true);
    setError(null);
    const fetchURL = async () => {
      try {
        const result = await axios.get(url);
        setData(result.data);
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

  return [data, loading, error];
};

export default useDataApi;
