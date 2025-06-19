import './App.css'
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import WeatherInfos from './components/WeatherInfos';
import Weather5Days from './components/Weather5Days';
import WeatherSlider from './components/WeatherMain';
import TiltCard from './components/TitleCard';
function App() {

  const inputRef = useRef()
  const [weather, setWeather] = useState(null)
  const [weather5Days, setWeather5Days] = useState(null)
  const [displayWeatherMain, setDisplayWeatherMain] = useState(true)
  const [erro, setErro] = useState(false)

  const searchCity = async () => {

    try {

      const city = inputRef.current.value
      const key = "c9a1e7ace15eb12ce9282999ca5758bd"

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt-br`
      const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
      const apiWeather = await axios.get(url)
      const apiWeather5Days = await axios.get(url5Days)

      setDisplayWeatherMain(false)
      setWeather(apiWeather.data)
      setWeather5Days(apiWeather5Days.data)
      setErro(false)
    } catch (error) {
      setErro(true)
    }

  }

  return (
    <div className='App'>
      <h1>DailyForecast</h1>
      <div className='search'>
        <input className="input-city" type="text" ref={inputRef} placeholder='Write the name of the city' />
        <button onClick={searchCity}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='button-icon' />
        </button>
      </div>

      {erro && <p className='erro'>City not Found</p>}

      <TiltCard className="card">
        {weather && !erro && <WeatherInfos weather={weather} />}
      </TiltCard>

      <TiltCard className="card">
        {weather5Days && !erro && <Weather5Days weather5Days={weather5Days} />}
      </TiltCard>

      {displayWeatherMain && !erro && <WeatherSlider />}

    </div>
  )
}

export default App
