import { useState, useEffect } from 'react';
import { client } from './lib/client';

export function useSanityData<T>(query: string, initialData: T | null = null) {
  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(query)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, [query]);

  return { data, loading };
}
