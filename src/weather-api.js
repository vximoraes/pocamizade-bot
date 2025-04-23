import dotenv from 'dotenv'
dotenv.config()

const api = {
    key: process.env.WEATHER_API_KEY,
    base: "https://api.weatherapi.com/v1"
};

export async function getWeather(city) {
    console.log('Cidade recebida pela API:', city);
    return fetch(`${api.base}/current.json?key=${api.key}&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            const weather = {
                temperature: data.current.temp_c,
                feelsLike: data.current.feelslike_c,
                last_updated: data.current.last_updated,
                condition: data.current.condition.text,
                icon: data.current.condition.icon,
                region: data.location.region,
            };
            return weather;
        })
        .catch(error => console.error('Error on fetching', error));
}