import './WeatherMain.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';

const cities = ['New York', 'London', 'Tokyo', 'Paris', 'São Paulo', 'Sydney'];

const WeatherSlider = () => {
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY = 'c9a1e7ace15eb12ce9282999ca5758bd';

  useEffect(() => {
    const fetchWeather = async () => {
      const promises = cities.map(city =>
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      );
      const results = await Promise.all(promises);
      setWeatherData(results.map(res => res.data));
    };

    fetchWeather();
  }, []);

  return (
    <div className='container-weather-main' style={{ margin: ' 40px auto' }}>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2500 , disableOnInteraction: false}}
        pagination={true}
        navigation
        loop={true}
      >
        {weatherData.map((data, index) => (
          <SwiperSlide key={index}>
            <div style={{ padding: 20, textAlign: 'center' }}>
              <h3>{data.name}</h3>
              <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="img" />
              <p className='forecast-description'>{data.weather[0].description}</p>
              <p className='forecast-temps'>{data.main.temp} °C 🌡️</p>
              <p className='wind-speed'>{data.wind.speed} m/s 💨</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WeatherSlider;
