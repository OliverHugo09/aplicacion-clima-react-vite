import { WeatherDisplay } from "./WeatherDisplay"
import { useWeatherData } from "../hooks/useWeatherData"

export const WeatherForm = () => {
    const { ciudad, dataClima, error, handleCambioCiudad, fetchClima } = useWeatherData()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (ciudad.length > 0) {
            fetchClima()
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ciudad}
                    onChange={handleCambioCiudad}
                    placeholder="Introduce el nombre de una ciudad"
                />
                <button type="submit">Buscar</button>
            </form>
            {/* se ejecutará si la variable error es verdadera */}
            {error && (
                <div className="error-alert">
                    <p className="error-message">{error}</p>
                </div>
            )}
            <WeatherDisplay dataClima={dataClima} />
        </>
    )
}
