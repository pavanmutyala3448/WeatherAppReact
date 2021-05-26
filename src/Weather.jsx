import axios from "axios";
export default async function getWeather(cityName) {
  const APIKEY = "2fa979efb6d5747b60faa64885fc0d57";
  const Url = "https://api.openweathermap.org/data/2.5/weather?q=";
  const data = await axios
    .get(`${Url}${cityName}&appid=${APIKEY}`)
    .then((res) => res);
  return data;
}
