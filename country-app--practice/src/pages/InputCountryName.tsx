import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApiFetch from "../hooks/useApiFetch";
import styles from "./InputCountryName.module.css";

const InputCountryName = () => {
  const ApiURL = "https://restcountries.com/v3.1/name/";

  const [isApiTriggered, setIsApiTriggered] = useState(false);
  const [countryName, setCountryName] = useState("");

  const { data, isLoading, error } = useApiFetch(
    ApiURL,
    countryName,
    isApiTriggered
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/countryDetails", { state: data });
    }
  }, [data]);

  const handleOnInputFormSubmit = (e: any) => {
    e.preventDefault();
    setIsApiTriggered((prev) => !prev);
  };
  if (error.type !== 0) {
    return (
      <div style={{ padding: "40px" }}>
        <p>{error.message}</p>
        <br></br>
        <br></br>
        <button onClick={() => window.location.reload()}>reload</button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleOnInputFormSubmit} className={styles.inputForm}>
        <input
          type="text"
          required
          placeholder="Enter country name"
          value={countryName}
          onChange={(e: any) => setCountryName(e.target.value)}
        ></input>
        <input type="submit" value={isLoading ? "Loading.." : "submit"}></input>
      </form>
    </div>
  );
};

export default InputCountryName;
