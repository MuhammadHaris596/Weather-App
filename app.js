
let cityNameText = document.getElementById("city_text");
let cityName_inp = document.getElementById("city_inp");
let temperatureDiv = document.getElementById('temperatureDiv')
let serch_btn = document.getElementById("serch_btn");
let city_inp = document.getElementById("city_inp");

let sunSet = document.getElementById("sunset");
let sunrise = document.getElementById("sunrise");

let windSp_txt = document.getElementById("wind_sp");
let humidity = document.getElementById("rain_per");
let rain_icon = document.getElementById("rain_icon");
let temp
let weatherDescrip = document.getElementById("we_txt");


async function getData() {
    try{
        if(cityName_inp.value.trim() !== ''){
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName_inp.value}&appid=244006e372fb520e56e50b3032f7bcf1`)
        //    .then((re)=> res.json()) .then( (data)=> weatherData = data);
           .then((res) => res.json() ).then((data) => weatherData=data); 

        //    console.log(res)
           console.log(weatherData)
            temp = weatherData.main.temp - 273.5;

            temperatureDiv.innerText = `${Math.round(temp)}°C`
        
            if(Math.round(temp) >= 25){
                temperatureDiv.style.color ="red"
            }
            else{
                 temperatureDiv.style.color ="white"
            }

   



        }else{
            alert("Enter City name")
        }
                  
            
            
             


            cityNameText.innerText = cityName_inp.value;
                windSp_txt.innerText = `${weatherData.wind.speed} Km/h`;
                humidity.innerText = `${weatherData.main.humidity} %`;
                sunrise.innerText = `${weatherData.sys.sunrise}`;
                sunSet.innerText = `${weatherData.sys.sunset}`
                weatherDescrip.innerText = `${weatherData.weather[0].main}`

                if(weatherData.weather[0].main === "Clear"){
                    imgSrc.src="sun.png"
                    }
                 
                    else if (weatherData.weather[0].main === "Clouds"){
                        imgSrc.src="clouds.png"
                    }
                 
                    else if(weatherData.weather[0].main === "Rain"){
                 
                    imgSrc.src= "rainy-day.png"
                    }
                    else if(weatherData.weather[0].main === "Thunderstorm"){
                    imgSrc.src="storm.png"
                    }
                 
                    else if(weatherData.weather[0].main === "Snow"){
                    imgSrc.src="snow.png"
                    }
                 
                    else if(weatherData.weather[0].main === "Mist"){
                    imgSrc.src="mist.png"
                 
                    }
                    else if(weatherData.weather[0].main === "Haze"){
                     imgSrc.src= "mist.png"
                 
                    }
          

        
        
    } catch(error){

        console.log(error)
    }
}



city_inp.addEventListener("input",()=>{
    getData()
})


















