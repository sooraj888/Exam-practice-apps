import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useApiFetch from "../hooks/useApiFetch";

const CountryDetails = () => {
  const localState: any = useLocation().state;
  // console.log(localState);
  const [capitalName, setCapitalName] = useState("");
  const ApiURL =
    "http://api.weatherstack.com/current?access_key=78ae6ba411469f63795fe8974e0e3a45&query=";
  const [trigerApi, setTrigerApi] = useState(false);

  const { data, isLoading, error } = useApiFetch(
    ApiURL,
    capitalName,
    trigerApi
  );

  const [isCapitaleVisible, setISCaplitaleVisible] = useState(false);

  const handleOnCapitalBtnClick = () => {
    if (!data) {
      setCapitalName(localState?.[0]?.capital);
      setTrigerApi((prev) => !prev);
    }
    setISCaplitaleVisible((prev) => !prev);
  };

  if (!localState) {
    return <div>Error: data not found </div>;
  }
  return (
    <div className="page">
      <div>
        <span>Country</span>:<span>{localState?.[0]?.name?.common}</span>
      </div>
      <div>
        <span>Capital</span>:<span>{localState?.[0]?.capital}</span>
      </div>
      <div>
        <span>Population</span>:<span>{localState?.[0]?.population}</span>
      </div>
      <div>
        <img src={localState[0].flags?.png} alt="flag"></img>
      </div>
      <div>
        <span>LatLng</span>:<span>{localState?.[0]?.latlng}</span>
      </div>
      <button onClick={handleOnCapitalBtnClick}>
        {isLoading ? "Loading..." : "capital-weather"}
      </button>
      {isCapitaleVisible && data ? (
        <CapitalWeather data={data}></CapitalWeather>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CountryDetails;

const CapitalWeather = (data: any) => {
  console.log(data?.data);
  return (
    <div className="capitalweather">
      <div>
        <span>Capital</span>:<span>{data?.data?.location?.name}</span>
      </div>
      <div className="a">
        <img
          alt="weatherIcon"
          src={data?.data?.current?.weather_icons?.[0]}
        ></img>
        <span>Temperature</span>:<span>{data?.data?.current?.temperature}</span>
      </div>
    </div>
  );
};
