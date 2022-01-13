import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./InputForm.module.css";

const InputForm = ({ inputCountryName, setInputCountryName }: any) => {
  const [isSubmitButtonDisable, setIsSubmitButtonDisable] = useState(true);

  const handleInputChange = (e: any) => {
    setInputCountryName(e.target.value.trim());
    if (inputCountryName !== "") {
      setIsSubmitButtonDisable(false);
    } else {
      setIsSubmitButtonDisable(true);
    }
    console.log(inputCountryName);
    localStorage.setItem("CountryName", e.target.value.trim());
  };

  const handleOnSubmitForm = (e: any) => {
    console.log("submit");
  };

  useEffect(() => {
    if (inputCountryName != "") {
      setIsSubmitButtonDisable(false);
    } else {
      setIsSubmitButtonDisable(true);
    }
  }, [inputCountryName]);

  return (
    <div className={styles.container}>
      <form className={styles.a}>
        <input
          className={styles.countryInput}
          type="text"
          autoFocus
          required
          onChange={handleInputChange}
          value={inputCountryName}
          placeholder="Enter the country name"
        ></input>
        <Link to="countryPage">
          <input
            type="submit"
            disabled={isSubmitButtonDisable}
            onClick={handleOnSubmitForm}
          ></input>
        </Link>
      </form>
    </div>
  );
};

export default InputForm;
