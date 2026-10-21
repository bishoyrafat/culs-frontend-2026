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

const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const statusEl = document.getElementById("status");

function setStatus(msg) {
  statusEl.textContent = msg;
  statusEl.hidden = !msg;
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

function render(data, label) {
  const c = data.current;
  const weatherInfo = getWeather(c.weather_code);
  const text = weatherInfo[0];
  const sky = weatherInfo[2];
  
  document.body.dataset.sky = sky === "clear" ? (c.is_day ? "clear-day" : "clear-night") : sky;

  document.getElementById("current-place").textContent = label;
  document.getElementById("current-temp").textContent = Math.round(c.temperature_2m) + "°";
  document.getElementById("current-summary").textContent = text;
  
  document.getElementById("current-details").innerHTML = [
    ["Feels like", Math.round(c.apparent_temperature) + "°"],
    ["Humidity", c.relative_humidity_2m + "%"],
    ["Wind", Math.round(c.wind_speed_10m) + " km/h"],
  ].map(function(item) {
    return "<div class=\"details__item\"><dt class=\"details__label\">" + item[0] + "</dt><dd class=\"details__value\">" + item[1] + "</dd></div>";
  }).join("");

  const h = data.hourly;
  const nowHour = c.time.slice(0, 13) + ":00";
  const start = Math.max(0, h.time.findIndex(function(t) { return t >= nowHour; }));
  
  document.getElementById("hourly-list").innerHTML = h.time.slice(start, start + 24).map(function(t, i) {
    const idx = start + i;
    return "<li class=\"hourly__item\"><span class=\"hourly__time\">" + t.slice(11, 16) + "</span><span>" + getWeather(h.weather_code[idx])[1] + "</span><span>" + Math.round(h.temperature_2m[idx]) + "°</span></li>";
  }).join("");


  const d = data.daily;
  document.getElementById("daily-list").innerHTML = d.time.map(function(day, i) {
    const w = getWeather(d.weather_code[i]);
    const name = i === 0 ? "Today" : new Date(day + "T12:00").toLocaleDateString("en", { weekday: "long" });
    return "<li class=\"daily__item\"><span>" + name + "</span><span title=\"" + w[0] + "\">" + w[1] + "</span><span class=\"daily__temps\">" + Math.round(d.temperature_2m_max[i]) + "° <span class=\"daily__min\">" + Math.round(d.temperature_2m_min[i]) + "°</span></span></li>";
  }).join("");

  ["current", "hourly-section", "daily-section"].forEach(function(id) {
    document.getElementById(id).hidden = false;
  });
}

async function handleAction(fn) {
  try { 
    await fn(); 
  } catch (err) { 
    setStatus(err.message || "Something went wrong. Check your connection and try again."); 
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  handleAction(async function() {
    setStatus("Searching…");
    const cityData = await searchCity(cityInput.value.trim());
    await fetchForecast(cityData);
  });
});

document.getElementById("locate-button").addEventListener("click", function() {
  if (!navigator.geolocation) return setStatus("Your browser doesn't support location. Search for a city instead.");
  setStatus("Finding your location…");
  navigator.geolocation.getCurrentPosition(
    function(pos) {
      handleAction(function() {
        return fetchForecast({ lat: pos.coords.latitude, lon: pos.coords.longitude, label: "Your location" });
      });
    },
    function() {
      setStatus("Location access was denied. Search for a city instead.");
    }
  );
});
