import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

const CountryDetails = () => {
  const localState: any = useLocation().state;
  //   console.log(localState);

  const [apiTriger, setApiTriger] = useState(false);
  const [capitalName, setCapitalName] = useState("");
  const url =
    "http://api.weatherstack.com/current?access_key=78ae6ba411469f63795fe8974e0e3a45&query=";
  const { data, isLoading, error } = useFetchApi(url, capitalName, apiTriger);
  const [isCapitaWeatherVisble, setIsCapitalWeatherSisible] = useState(false);

  const handleOnCapitalButton = () => {
    if (!data) {
      setCapitalName(localState?.capital);
      setApiTriger((prev) => !prev);
    }
    setIsCapitalWeatherSisible((prev) => !prev);
  };

  //   useEffect(() => {
  //     if (data) {
  //       console.log(data);
  //     }
  //   }, [data]);

  return (
    <div className="countryContainer">
      <div>
        <span>Country</span>:<span>{localState?.name?.common}</span>
      </div>
      <div>
        <span>Capital</span>:<span>{localState?.capital}</span>
      </div>
      <div>
        <span>Population</span>:<span>{localState?.population}</span>
      </div>
      <div>
        <img src={localState?.flags?.png} alt="flag image"></img>
      </div>
      <div>
        <button onClick={handleOnCapitalButton}>
          {isLoading ? "Loadding..." : "capital-weather"}
        </button>
      </div>
      {isCapitaWeatherVisble && data && (
        <CapitaWeather capitalName={capitalName} data={data}></CapitaWeather>
      )}
    </div>
  );
};

export default CountryDetails;

const CapitaWeather = ({ data, capitalName }: any) => {
  console.log(capitalName, data);

  return (
    <div className="capitalContainer">
      <div>
        Weather report of :<br></br>
        <b>{capitalName}</b>
      </div>
      <div>
        <img alt="weather icon" src={data?.current?.weather_icons}></img>
        <span>
          Tempratur:{data?.current?.temperature}
          <sup>0</sup>C
        </span>
      </div>
      <div>
        <span>Latitude</span> : <span>{data?.location?.lat}</span>
      </div>
      <div>
        <span> Longitude</span>:<span>{data?.location?.lon}</span>
      </div>
    </div>
  );
};
