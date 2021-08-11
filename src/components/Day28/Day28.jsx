import React from "react";
import { useState , useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Day28.css";



const Day28=()=>
{
   

    const[place , setPlace]=useState("");
    const [placeData , setPlaceData] =useState({});
    const updatePlaceData =()=>
    {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=ef024b5896ab4160913141404211008&q=${place}`)
        .then(res => res.json())
        .then(data =>
          {
              setPlaceData(data);
          });

    }
    
    return(
        <>

         <div className="day28_weather">
             <input className="day28_input" 
             type="text"
              placeholder="Enter city name" 
              value={place} 
              onChange={(e)=>
              {
                  setPlace(e.target.value);

              }}/>

           <button type="button" className="btn btn-primary day28_btn"  onClick={updatePlaceData}>Submit</button>

         </div>

         <div className="day28_content">

           {placeData.location ? 
           (
               <div>

               <div className="day28_country">
               <h1 className="day28_h1">{placeData.location.name}</h1>
              
               <h1 className="day28_h3">{placeData.location.country}</h1>

               </div>

               <img src={placeData.current.condition.icon} className="day28_img"/>

               <div className="day28_text">
               
               <h1 className="day28_h4">{placeData.current.temp_c}<span style={{marginLeft:"5px"}}>°</span></h1>
               
              
                
               <h1 className="day28_h6">{placeData.current.condition.text}</h1>

               </div>

               
               <hr/>
               <div>
              
               
               <img className="day28_img2" src={placeData.forecast.forecastday[0].hour[0].condition.icon}/>
               
              

               
               <img className="day28_img2" src={placeData.forecast.forecastday[0].hour[1].condition.icon}/>
               
              


               
               <img className="day28_img2" src={placeData.forecast.forecastday[0].hour[2].condition.icon}/>
               
               

              
               <img className="day28_img2" src={placeData.forecast.forecastday[0].hour[3].condition.icon}/>
               
              

               
               <img className="day28_img2" src={placeData.forecast.forecastday[0].hour[4].condition.icon}/>
               
               
              
              </div>

              <br/>

              <div style={{width:"550px" , backgroundColor:"transparent"}}>
               <span className="day28_temp1">{placeData.forecast.forecastday[0].hour[0].temp_c} °C</span>
               <span className="day28_temp2">{placeData.forecast.forecastday[0].hour[1].temp_c} °C</span>
               <span className="day28_temp3">{placeData.forecast.forecastday[0].hour[2].temp_c} °C</span>
               <span className="day28_temp4">{placeData.forecast.forecastday[0].hour[3].temp_c} °C</span>
               <span className="day28_temp5">{placeData.forecast.forecastday[0].hour[4].temp_c} °C</span>
               
               </div>
              
              <br/><br/>
               <hr style={{marginTop:"-40px"}}/>

               <div className="day28_hour">
              <div className="day28_wind"> 
              <img className="wph_img" src="https://www.clipartmax.com/png/middle/59-593346_wind-clipart-weather-symbol-windy-weather-icon.png"/>
              <br/>
              <span>Wind <br/><span>{placeData.current.wind_kph} km/h</span></span> </div>

              <div className="day28_humidity"> 
              <img className="wph_img" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/humidity-drops-rain-water-weather-forecast-61169.png"/>
              <br/>
              <span>Humidity <br/><span>{placeData.current.humidity} %</span></span> </div>

              <div className="day28_prec"> 
              <img  className="wph_img" src="https://image.flaticon.com/icons/png/128/137/137220.png"/>
              <br/>
              <span>Precipitation <br/><span>{placeData.current.precip_in} %</span></span></div>
        
               </div>

               
               
               
              
              
               </div>

              


           )
            : (<div className="day28_h2">Oops!! <br/>Place Not Found <br/> TRY AGAIN</div>)}
         
            </div>
         
        </>
    );
}

export default Day28;

