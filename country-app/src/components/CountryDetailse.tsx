import React, { memo, useEffect, useMemo, useState } from "react";
import styles from "./CountryDetailse.module.css";

const CountryDetailse = ({ inputCountryName }: any) => {
  const [isloadingCountry, setIsLoadingCountry] = useState<boolean>(true);
  const [isWetherDataLoading, setIsWetherDataLoading] = useState<boolean>(true);
  const [isCapitaeWeetherVisible, setIsCapitaeWeetherVisible] =
    useState<boolean>(false);

  const [countryData, setCountryData] = useState<any>([]);
  const [weatherData, setWeatherData] = useState<any>([]);
  const APIEndPOINT = "https://restcountries.com/v3.1/name/";

  const handleOnWeatherButtonClick = () => {
    console.log("ss");

    if (isCapitaeWeetherVisible) {
      setIsCapitaeWeetherVisible(false);
    } else {
      setIsCapitaeWeetherVisible(true);

      fetch(
        "http://api.weatherstack.com/current?access_key=78ae6ba411469f63795fe8974e0e3a45&query=%20" +
          countryData?.capital?.[0]
      )
        .then((rawData: any) => rawData.json())
        .then((data: any) => {
          setWeatherData(data);
        });
    }
  };

  useEffect(() => {
    try {
      fetch(
        APIEndPOINT + (inputCountryName || localStorage.getItem("CountryName"))
      )
        .then((rawData: any) => rawData.json())
        .then((data: any) => {
          setIsLoadingCountry(false);
          setCountryData(data?.[0]);
        })
        .catch(() => {
          console.log("error");
        });
    } catch (e) {
    } finally {
      console.log("sdsad");
    }
  }, []);

  useEffect(() => {
    console.log(countryData);
  }, [countryData]);

  useMemo(() => {
    console.log(weatherData);
  }, [weatherData]);

  useEffect(() => {
    console.log(isCapitaeWeetherVisible);
  }, [isCapitaeWeetherVisible]);
  return (
    <div>
      {isloadingCountry ? (
        <>loading</>
      ) : (
        <>
          <div>{countryData?.name?.common}</div>
          <div>capital:{countryData?.capital?.[0]}</div>
          <div>population:{countryData?.population}</div>
          <img src={countryData?.flags?.png} alt="flag"></img>
          <div>latlng:{countryData?.latlng}</div>
          <input
            type="button"
            value={"capitleWeather"}
            onClick={handleOnWeatherButtonClick}
          ></input>
          {isCapitaeWeetherVisible}
        </>
      )}
    </div>
  );
};

export default CountryDetailse;
