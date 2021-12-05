import { useState, useEffect } from 'react';
import { CardItemTypes } from '../_types/datas';
import {
  FUseFetchingDataArgs,
  FUseFetchingItemResult,
} from '../_types/fetchData';

type FUseFetchingDataHook = (
  url: FUseFetchingDataArgs
) => FUseFetchingItemResult;

const useFetchingItem: FUseFetchingDataHook = (url) => {
  const [data, setData] = useState(null as unknown as CardItemTypes);
  const [error, setError] = useState(null as unknown as string);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(url as unknown as string)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setError('');
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
          setData(null as unknown as CardItemTypes);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => (isMounted = false) as any;
  }, [url]);

  return { loading, error, data };
};

export default useFetchingItem;
