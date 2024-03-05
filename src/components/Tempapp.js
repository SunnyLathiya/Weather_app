import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e3ea767d0a77e286511371eaa096208d`;
      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main);
    };

    fetchApi(); 
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="container">
          <input
            type="search"
            className="inpu"
            placeholder="Enter the City"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="para"> No data Found</p>
        ) : (
          <div className="container1">
            <div className="container2">
              <h2 className="hea1">
                <i class="fa-sharp fa-solid fa-city"></i> {search}
              </h2>
              <h1 className="tempr">{city.temp}</h1>
              <h3 className="othertem">
                <i class="fa-solid fa-temperature-arrow-down"></i> Min:{" "}
                {city.temp_min}cel |{" "}
                <i class="fa-solid fa-temperature-arrow-up"></i> Max :{" "}
                {city.temp_max}cel
              </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
