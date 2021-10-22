import { useState, useEffect } from 'react';

export interface FUseFetchingDataArgs {
  url: string;
}

interface FUseFetchingDataResult {
  loading: boolean;
  error: string;
  data: any[];
}

type FUseFetchingDataHook = (
  arg: FUseFetchingDataArgs
) => FUseFetchingDataResult;

const useFetchingData: FUseFetchingDataHook = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
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
          setData([]);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => (isMounted = false) as any;
  }, [url]);

  return { loading, error, data };
};

export default useFetchingData;
