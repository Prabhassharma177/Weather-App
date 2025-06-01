import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
       city: "Wonderland",
       feelslike: 19.47,
       temp: 22.05,
       tempMin: 22.05,
       tempMax: 22.05,
       humidity: 42,
       weather: "haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

   return(
     <div style={{textAlign: "center"}}>
       <h2>Weather App</h2>
       <SearchBox  updateInfo={updateInfo}/>
       <InfoBox info={weatherInfo}/>
     </div>
   );
}