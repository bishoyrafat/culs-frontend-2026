const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";


const CODES = {
  0: ["Clear sky", "☀️", "clear"], 1: ["Mostly clear", "🌤️", "clear"],
  2: ["Partly cloudy", "⛅", "cloudy"], 3: ["Overcast", "☁️", "cloudy"],
  45: ["Fog", "🌫️", "fog"], 48: ["Freezing fog", "🌫️", "fog"],
  51: ["Light drizzle", "🌦️", "rain"], 53: ["Drizzle", "🌦️", "rain"], 55: ["Heavy drizzle", "🌧️", "rain"],
  56: ["Freezing drizzle", "🌧️", "rain"], 57: ["Freezing drizzle", "🌧️", "rain"],
  61: ["Light rain", "🌦️", "rain"], 63: ["Rain", "🌧️", "rain"], 65: ["Heavy rain", "🌧️", "rain"],
  66: ["Freezing rain", "🌧️", "rain"], 67: ["Freezing rain", "🌧️", "rain"],
  71: ["Light snow", "🌨️", "snow"], 73: ["Snow", "🌨️", "snow"], 75: ["Heavy snow", "❄️", "snow"],
  77: ["Snow grains", "❄️", "snow"],
  80: ["Rain showers", "🌦️", "rain"], 81: ["Rain showers", "🌧️", "rain"], 82: ["Violent showers", "🌧️", "rain"],
  85: ["Snow showers", "🌨️", "snow"], 86: ["Snow showers", "🌨️", "snow"],
  95: ["Thunderstorm", "⛈️", "storm"], 96: ["Thunderstorm, hail", "⛈️", "storm"], 99: ["Thunderstorm, hail", "⛈️", "storm"],
};

function getWeather(code) {
  return CODES[code] || ["Unknown", "❔", "cloudy"];
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Request failed (" + res.status + ")");
  return res.json();
}

async function searchCity(name) {
  const data = await fetchJSON(GEO_URL + "?name=" + encodeURIComponent(name) + "&count=1&language=en");
  if (!data.results || !data.results.length) throw new Error("No city found for \"" + name + "\". Check spelling and try again.");
  
  const r = data.results[0];
  return { lat: r.latitude, lon: r.longitude, label: [r.name, r.admin1, r.country].filter(Boolean).join(", ") };
}

async function fetchForecast(locationData) {
  setStatus("Loading forecast…");
  const params = new URLSearchParams({
    latitude: locationData.lat, 
    longitude: locationData.lon, 
    timezone: "auto", 
    forecast_days: 7,
    current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day",
    hourly: "temperature_2m,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
  });
  
  const data = await fetchJSON(FORECAST_URL + "?" + params);
  render(data, locationData.label);
  setStatus("");
  localStorage.setItem("forecast:last", JSON.stringify(locationData));
}
