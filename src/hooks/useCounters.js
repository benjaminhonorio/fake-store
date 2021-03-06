import { useState, useEffect } from 'react';
import { countGenerator } from '../utils';

const useCounters = (products) => {
  const [counters, setCounters] = useState([]);

  const loadCounters = () => {
    if (!counters.length && products.length) {
      const newCounters = products.map((_) => countGenerator());
      setCounters(newCounters);
    }
  };

  const decreaseCounters = () => {
    if (counters.length) {
      const id = setInterval(() => {
        const newCounters = counters.map((counter) => {
          return counter ? counter - 1 : counter;
        });
        setCounters(newCounters);
      }, 1000);

      return () => {
        clearInterval(id);
      };
    }
  };
  useEffect(loadCounters, [products]);
  useEffect(decreaseCounters, [counters]);

  return [counters];
};

export default useCounters;
