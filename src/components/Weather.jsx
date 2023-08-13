import React from 'react'
import "./Weather.css"
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { useEffect, useState } from 'react';



const Weather = ({data}) => {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if(JSON.stringify(data) !== "{}"){
    return (
      <div className='d-flex flex-column align-items-center gap-2 m-3'>
        <p> <Clock value={value} /> </p>
        <h2>{data.name},{data.sys.country}</h2>
        <h1><img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>  | {data.main.temp} °C </h1>
        <h1>{data.weather[0].main} </h1>
        <p>Humidity {data.main.humidity}%</p>
        <p>Visibility : {data.visibility /1000}Km</p>
      </div>
    )
  }else{
    return ( 
    <h1> loading...</h1>
    )
  }
}

export default Weather
