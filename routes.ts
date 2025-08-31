import fetch from "node-fetch";
import { responseItemType, WeatherDetailType, WeatherQueryInterface } from "./custom.js";

const routeHello = (): string => "Hello World!";

const routeAPINames = async (): Promise<string> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data: responseItemType[];
    try {
        const response = await fetch(url);
        console.log(response); 
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        return "Error"
    }
    const names = data
    .map(i => `id: ${i.id}, name: ${i.name}`)
    .join("<br>");
    return names;
};


const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => 
    {
        return {
            zipcode: query.zipcode,
            weather: "sunny",
            temp: 35
        };
    }
const routeWeather = (query: WeatherQueryInterface): WeatherDetailType => queryWeatherData(query);

export {routeHello, routeAPINames, routeWeather};