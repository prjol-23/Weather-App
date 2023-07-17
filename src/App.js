import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {useEffect, useState } from "react";


function App() {

const apiKey = "ffcb333664d15c46f2258493da7e0bd3"
const [data, setData] = useState()
const [inputCity,setInputCity] = useState("")
const getWeatherDetails = (cityName) =>
{
   if(!cityName) 
   return
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
  axios.get(apiURL).then((res)=>{
    console.log("response",res.data);
    setData(res.data)
  }).catch((err) =>{
    console.log("err",err)
  })
}


const handleSearch = () =>
{
  getWeatherDetails(inputCity);
}

  useEffect(() =>
  {
    getWeatherDetails("Lalitpur");
  }, [])

const handleIpChange = (e) =>
{ 
  console.log("value",e.target.value)
  setInputCity(e.target.value)
}

if (!data) {
  return null;
}


  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>
         <div className="d-grid gap-4 col-4 mt-4">
          <input type="text" className="form-control" value={inputCity} onChange={handleIpChange} />
           <button className="btn btn-primary" type="button" onClick={handleSearch} >Search</button>

           <div className="col-md-12  text-center mt-5">

            <div className="shadow rounded weatherResultBox">
              <img className="weatherIcon" src="weatherimg.png" alt="cloudimg"/>
              <h5 className="weatherCity">{data?.name}</h5>
              <h5 className="weatherCity">{data?.sys?.country}</h5>
              <h5 className="weatherCity">{data?.weather[0]?.description}</h5>
              <h6 className="weatherTemp">{(data?.main?.temp-273.15).toFixed(2)}°C</h6>
              
            </div>
           </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
