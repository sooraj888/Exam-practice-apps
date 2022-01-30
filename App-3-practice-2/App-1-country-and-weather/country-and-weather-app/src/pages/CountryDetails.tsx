import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";
import styles from "./CountryDetails.module.css";

const CountryDetails = () => {
  const localState: any = useLocation().state;

  const [trigerApi, setTrigerApi] = useState(false);
  const url =
    "http://api.weatherstack.com/current?access_key=78ae6ba411469f63795fe8974e0e3a45&query=";
  const [capitalName, setCapitalName] = useState("");

  const { data, error, isLoading } = useFetchApi(capitalName, url, trigerApi);
  const [isVisible, setVisible] = useState(false);

  const handleOnCapitalButton = () => {
    if (!data) {
      setCapitalName(localState?.[0]?.capital);
      setTrigerApi((pre) => !pre);
    }
    setVisible((pre) => !pre);
  };

  useMemo(() => {
    console.log(data);
  }, [data]);

  if (!localState) {
    return <div>No Data Found</div>;
  }

  return (
    <div className={styles.page}>
      <div>
        <span></span>:<span>{localState?.[0]?.name?.common}</span>
      </div>
      <div>
        <span></span>:<span>{localState?.[0]?.capital}</span>
      </div>
      <div>
        <span></span>:<span>{localState?.[0]?.population}</span>
      </div>
      <div>
        <img src={localState?.[0]?.flags?.png} alt="flag"></img>
      </div>
      <div>
        <input
          type="button"
          value={isLoading ? "Loading" : "capital-weather"}
          onClick={handleOnCapitalButton}
        ></input>
        {isVisible ? <CapitalWeather data={data} /> : <></>}
      </div>
    </div>
  );
};

export default CountryDetails;

const CapitalWeather = ({ data }: any) => {
  return <div>{data?.location?.name}</div>;
};
