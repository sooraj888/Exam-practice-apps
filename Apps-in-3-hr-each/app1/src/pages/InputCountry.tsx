import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

const InputCountry = () => {
  const [countryName, setCountryName] = useState("");
  const [trigerApi, setTrigetApi] = useState(false);
  let url = "https://restcountries.com/v3.1/name/";
  const { data, isLoading, error } = useFetchApi(url, countryName, trigerApi);

  const navigate = useNavigate();

  const handleOnFormSubmit = (e: any) => {
    e.preventDefault();
    setTrigetApi((prev: any) => !prev);
    console.log("submited");
  };
  useEffect(() => {
    if (data) {
      navigate("/countryDetails", { state: data?.[0] });
    }
  }, [data]);
  useEffect(() => {
    console.log(trigerApi);
  }, [trigerApi]);

  if (error.type !== 0) {
    return (
      <div>
        {" "}
        <h4>{error.message}</h4>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload
        </button>
      </div>
    );
  }

  return (
    <form className="inuputForm" onSubmit={handleOnFormSubmit}>
      <input
        type="text"
        placeholder="Enter Country name"
        onChange={(e: any) => {
          setCountryName(e.target.value);
        }}
        required
      ></input>
      <input type="submit" value={isLoading ? "Loadding.." : "Submit"}></input>
    </form>
  );
};

export default InputCountry;
