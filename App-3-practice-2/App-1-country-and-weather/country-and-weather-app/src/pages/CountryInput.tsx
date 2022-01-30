import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

const CountryInput = () => {
  const [countryName, setCountryName] = useState("");
  const [trigerApi, setTrigerApi] = useState(true);
  const url = "https://restcountries.com/v3.1/name/";

  const { data, error, isLoading } = useFetchApi(countryName, url, trigerApi);
  const navigate = useNavigate();

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setTrigerApi((prev) => !prev);
  };

  useMemo(() => {
    console.log(data);
    if (data) {
      navigate("/countryDetails", { state: data });
    }
  }, [data]);

  //   useEffect(() => {
  //     console.log(countryName);
  //   }, [countryName]);

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={countryName}
        placeholder="Enter country name"
        onChange={(e: any) => setCountryName(e.target.value)}
      />
      <input type="submit" value={isLoading ? "Loading ..." : "Submit"} />
    </form>
  );
};

export default CountryInput;
