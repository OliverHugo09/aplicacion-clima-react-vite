export const fetchdata = async (ciudad) => {
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'e8564574f49871f62b6cc2a212b45b8f';

    try {
        const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);

        if (!response.ok) {
            // Si la respuesta no es exitosa (por ejemplo, 404), maneja el error aquí
            throw new Error('No se pudo encontrar la ciudad.');
        }

        const data = await response.json();
        return {
            data,
            isLoading: false
        };
    } catch (error) {
        console.error(error);
        throw error; // Propaga el error para que pueda ser manejado en el componente WeatherForm
    }
};