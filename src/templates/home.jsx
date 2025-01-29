import React ,{useState, useEffect} from 'react'
import axios from "axios";
import Day from './day';
import Current_weather from './current_weather';
import Dashboard from './dashboard';
import Forecast from './forecast';

const Home = () => {
  const defaultLocation ='Ljubljana';
  const [weather,setWeather] = useState([]);
  const [location,setLocation] = useState(defaultLocation);
  const [forecast,setForecast] = useState(defaultLocation);

  const APIKEY = '2f0c72d9eafdf0b9fe2d8f6cd219d4b4';

  
  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKEY}&units=metric`)
    .then((response)=>setWeather(response.data));
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${APIKEY}&units=metric`)
    .then((response)=>setForecast(response.data));
  },[location])

 
  
  return (
    <>
      <form className='flex flex-col mt-[32px] items-center' action="submit" onSubmit={(e) => e.preventDefault()}>
        <input
          className='bg-gray-100 font-poppins text-[#223645]
     rounded-2xl px-6 py-3 w-[80%] focus:focus:outline-none shadow-md'

          onChange={(e) => { e.target.value ? (setLocation(e.target.value)) : (setLocation(defaultLocation)) }} type="text" placeholder={location} />

      </form>
      {weather.weather ? (
        <>
          <div className='mt-[24px] place-self-center font-medium font-poppins text-[#223645] text-[24px]'>
            {weather.name}, {weather.sys.country} 
            </div>

          <div className='mt-[24px]'>
            <Day datetime={weather?.dt} 
            timezone={weather?.timezone}
            />
          </div>

          <div className='ml-[24px] mt-[64px]'>
            <Current_weather
              temp={weather.main?.temp}
              weatherState={weather.weather[0]?.main}
              description={weather.weather[0]?.description}
              feel={weather.main.feels_like}
            />
          </div>

          <div className='mt-[32px]'>
            <Dashboard
              humidity={weather.main?.humidity}
              visibility={weather?.visibility}
              wind={weather.wind?.speed} />
          </div>

          <div className='mx-[24px] py-3 mt-3'>
            <div className='mb-[16px] font-extralight font-poppins text-[#223645] leading-[10px] text-[14px] '>24h Forecast</div>
            <div className='flex overflow-scroll 
            gap-[24px] items-center 
            '>
              {forecast.list?.slice(0, 8).map((item, index) => (
                <div className=''>
                  <Forecast
                    key={index}
                    dt={item.dt}
                    temp={item.main?.temp}
                    wind={item.wind?.speed}
                    weatherState={item.weather[0]?.main}
                    icon={item.weather[0]?.icon}
                  />
                </div>

              ))}
            </div>
          </div>
        </>
      ) : (
        <div>Loading weather...</div>
      )}
    </>
  )
}

export default Home