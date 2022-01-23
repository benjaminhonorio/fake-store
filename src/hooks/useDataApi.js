import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { dataFetchReducer } from './dataFetchReducer';

const useDataApi = (url, initialState) => {
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  const loadProducts = () => {
    const fetchURL = async () => {
      dispatch({ type: 'LOADING' });
      try {
        const result = await axios.get(url);
        dispatch({ type: 'SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FAILURE', payload: 'There was an error fetching the data' });
        console.log(error);
      }
    };
    fetchURL();
  };

  useEffect(loadProducts, []);

  return [state.data, state.loading, state.error];
};

export default useDataApi;
