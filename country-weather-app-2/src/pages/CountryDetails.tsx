import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CountryDetails = () => {
  const localState: any = useLocation().state;
  const [locationData, setLocationData] = useState<any>({
    location: { name: "", country: "", region: "" },
    current: { weather_icons: [], temperature: "", weather_descriptions: [] },
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!localState.data) {
      navigate("/");
    } else {
      const { location, current } = localState.data;
      setLocationData({ location, current });
    }
  }, []);

  return (
    <div>
      {locationData.location.name}
      <button onClick={() => navigate("/")}> back</button>
    </div>
  );
};

export default CountryDetails;
