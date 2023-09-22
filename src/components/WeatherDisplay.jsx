export const WeatherDisplay = ({ dataClima }) => {
    const difKelvin = 273.15

    if (!dataClima) {
        return <p>Esperando consulta...</p> // Muestra el mensaje
    }

    return (
        <div>
            <h2>{dataClima.name}</h2>
            <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
            <p>Condición meteorológica: {dataClima.weather[0].description}</p>
            <img
                src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
                alt="Condición meteorológica"
            />
        </div>
    )
}
