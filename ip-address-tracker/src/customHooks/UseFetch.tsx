import { useEffect, useState } from "react";

export const useFetch = (url: string): string[] | null => {
  const [response, setResponse] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setResponse(data);
    };

    fetchData();
  }, [url]);

  return response;
};
