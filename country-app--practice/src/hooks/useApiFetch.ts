import axios from "axios";
import React, { useEffect, useState } from "react";

const useApiFetch = (url: string, value: string, isTriggerApi: boolean) => {
  const [data, setData] = useState<any>("");
  const [error, setError] = useState({ type: 0, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const fetchFromApi = async () => {
    try {
      console.log("init");
      setIsLoading(true);
      const responce = await axios.get(url + value);

      if (!responce?.data) {
        setError({ type: 200, message: "please entert correct input" });
      } else {
        setData(responce.data);
      }
    } catch (e) {
      setError({ type: 400, message: "please entert correct input" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url && value) {
      fetchFromApi();
    }
  }, [isTriggerApi]);

  return { data, error, isLoading };
};

export default useApiFetch;
// http://api.weatherstack.com/current?access_key=78ae6ba411469f63795fe8974e0e3a45&query=

//https://restcountries.com/v3.1/name/
