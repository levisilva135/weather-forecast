import BarraClima from './BarraClima'
import './WeatherInfos.css'
const WeatherInfos = ({ weather }) => {
  return (
    <div className="weather-container">
      <div className='weather-main'>
        <h2>{weather.name}</h2>
        <div className='temperature-display'>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="clima" />
          <h2>{Math.round(weather.main.temp)}Cº</h2>
        </div>
      </div>
      <div className='bars'>
        <span>humidity ({weather.main.humidity}):</span>
        <BarraClima valor={weather.main.humidity} max={100} color='#B91372' />
        <span>pressure ({weather.main.pressure}):</span>
        <BarraClima valor={weather.main.pressure} max={1085} color='#AFECE7'/>
        <span>thermal sensation ({Math.round(weather.main.feels_like)}):</span>
        <BarraClima valor={Math.round(weather.main.feels_like)} max={45} color='#4357AD'/>
      </div>

    </div>
  )
}

export default WeatherInfos