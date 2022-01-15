import axios from "axios";
import React, { useEffect, useState } from "react";

const useApi = (query: string, triggerFetch: boolean) => {
  const [data, setData] = useState("");
  const [error, setError] = useState({ type: 0, message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const ApiKey = "78ae6ba411469f63795fe8974e0e3a45";
  const APIEndPoint = "http://api.weatherstack.com/current";

  useEffect(() => {
    async function triggerApi() {
      try {
        setIsLoading(true);
        const responce = await axios.get(APIEndPoint, {
          params: {
            access_key: ApiKey,
            query,
          },
        });
        if (responce.data.success == false) {
          setError({ type: 400, message: "please provide valid input" });
        } else {
          setData(responce.data);
        }
      } catch (e: any) {
        setError({ type: 500, message: "" });
      } finally {
        setIsLoading(false);
      }
    }
    if (query) triggerApi();
  }, [triggerFetch]);

  return { data, error, isLoading };
};

export default useApi;
