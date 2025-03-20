import React, { useState } from "react";

function WeatherDashboard() {
  // Mock weather data
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [previousSearch, setPreviousSearch] = useState([]);

  const searchCity = () =>{
    const cityName = searchTerm.trim();
    if (!cityName) return;

    const wetherData = mockWeatherData[cityName];
    if(wetherData){
      setWeatherInfo(wetherData);
      const previousSearchRecord = [...previousSearch, { cityName, ...wetherData }];
      console.log(previousSearchRecord)
      setPreviousSearch(previousSearchRecord);
    }else{
      // No Info
      setWeatherInfo(null);
    }

  }


  return (
    <div>
      <input type="text" id="citySearch" placeholder="Search for a city..."
      onChange={(e) => setSearchTerm(e.target.value)} />
      <button id="searchButton" onClick={()=>{searchCity()}}>Search</button>
      
      {weatherInfo && <div id="weatherData">
        
        <div>Temperature: {weatherInfo.temperature} </div>
        <div>Humidity: {weatherInfo.humidity}</div>
        <div>Wind Speed:{weatherInfo.windSpeed} </div>
        </div> }
        {!weatherInfo && <div>City not found.</div>}
        
        <h3>Previous Searches:</h3>
        {previousSearch.map((record, index) =>{
       return  <>
       <div key={index}>
       
        <button Click={()=>{
          setSearchTerm(record.cityName)
          searchCity();
          }}>{record.cityName}</button>
        </div>
       </>
})}
      
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;
