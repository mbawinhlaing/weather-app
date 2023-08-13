
import { useEffect, useState } from 'react';
import './App.css';
import { api,api_key } from './api/api.js';
import Form from './components/Form';
import Weather from './components/Weather';


const App = () => {
  const [conutry, setCountry] = useState('Sittwe')
  const [data , setData] = useState({});

const fetchWeather = async (country_name) => {
if(country_name !== undefined ){
 setCountry(country_name)
}
try{
  const res = await api.get(`/weather?q=${conutry}&appid=${api_key}`);
setData(res.data)
}catch(error){
  console.log("Error City");
}
}

useEffect ( () => {
fetchWeather();
}, [conutry])
  return (
    <div className='w-full min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='shawdow-lg bg-light gap-4'>
      <h1 className="text-center">Weather App</h1>
      <Form fetchWeather= {fetchWeather}/>
      <Weather data= {data}/>
      </div>
    </div>
  );
}

export default App;
