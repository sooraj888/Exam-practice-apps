import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../hooks/useApi";
import usePrevious from "../hooks/usePrevious";
import styles from "./pages/InputPage.module.css";

const InputPage = () => {
  const [countryName, setCountryName] = useState("");
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);
  const previousCountry = usePrevious(countryName);
  const [isTrigerFetch, setIsTrigerFetch] = useState(false);
  const navigate = useNavigate();
  const { data, error, isLoading } = useApi(countryName, isTrigerFetch);

  const handleOnInputFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    if (countryName !== previousCountry) {
      setIsTrigerFetch((prevValue) => !prevValue);
    }
  };
  const handleInputCountryNameChange = (e: any) => {
    setCountryName(e.target.value);
  };

  useEffect(() => {
    console.log(countryName);
    if (countryName) {
      setIsSubmitBtnDisabled(false);
    } else {
      setIsSubmitBtnDisabled(true);
    }
  }, [countryName]);

  useEffect(() => {
    console.log(data);
    if (data) navigate("countryDetails", { state: { data } });
  }, [data]);
  return (
    <form onSubmit={handleOnInputFormSubmit}>
      <input
        type="text"
        value={countryName}
        onChange={handleInputCountryNameChange}
        placeholder="Enter country name"
      ></input>
      <input
        type="submit"
        value={"submit"}
        disabled={isSubmitBtnDisabled}
      ></input>
    </form>
  );
};

export default InputPage;
