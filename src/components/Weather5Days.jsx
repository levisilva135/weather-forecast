import './Weather5Days.css'

const Weather5Days = ({ weather5Days }) => {

    let dailyForecast = {}

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const nextFiveDays = Object.values(dailyForecast).slice(1, 6)
    console.log(nextFiveDays);


    const convertData = (date) => {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('en-US', { weekday: 'long', day: '2-digit' })
        return newDate
    }

    return (

      <div className='weather-container weather-container-five-days'>
            <h3>forecast for the next few days</h3>
            <div className='weather-list'> 
            {nextFiveDays && nextFiveDays.map((forecast) => (
                <div key={forecast.dt} className='weather-item'>
                    <p className='forecast-date'>{convertData(forecast)}</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="weather" />
                    <p className='forecast-description'>{forecast.weather[0].description}</p>
                    <p className='forecast-temps'>{Math.round(forecast.main.temp_min)}Cº min / {Math.round(forecast.main.temp_max)}Cº máx</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Weather5Days