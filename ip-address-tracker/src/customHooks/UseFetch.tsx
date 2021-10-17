import { useEffect, useState } from "react";

interface IPResponse {
  location: {
    country: string;
    region: string;
    timezone: string;
  };
  ip: string;
  isp: string;
}
export const useFetch = (url: string): IPResponse | null => {
  const [response, setResponse] = useState<IPResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setResponse(data);
      console.log(response);
    };

    fetchData();
  }, [url]);

  return response;
};
