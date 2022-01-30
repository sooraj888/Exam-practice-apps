import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchApi = (value: string, url: string, trigerApi: boolean) => {
  const [data, setData] = useState<any>("");
  const [error, setError] = useState({ type: 0, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("d");
      try {
        setIsLoading(true);
        const responce = await axios.get(url + value);
        if (responce?.data?.success != false) {
          setData(responce?.data);
        } else {
          setError({ type: 300, message: "please" });
        }
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    };

    if (value && url) fetchData();
  }, [trigerApi]);

  return { data, error, isLoading };
};

export default useFetchApi;
