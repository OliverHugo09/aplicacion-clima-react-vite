import { useState } from "react"
import { fetchdata } from "../helpers/fetchDataClima"

export const useWeatherData = () => {

    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)
    const [error, setError] = useState(null)

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const fetchClima = async () => {
        try {
            const response = await fetchdata(ciudad)
            setDataClima(response.data)
            setError(null);
        } catch (error) {
            setError("No se pudo encontrar la ciudad.")
        }
    }

    return { ciudad, dataClima, error, handleCambioCiudad, fetchClima }
}
