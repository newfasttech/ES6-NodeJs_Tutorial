const getWeatherData = async (city) => {
    try {
      
        const url = `https://wttr.in/${city}?format=j1`;
        console.log(`📡 Fetching live weather data for ${city}...`);
        const response = await fetch(url);

      
        if (!response.ok) {
            throw new Error("Invalid city name or server is down!");
        }
        
        const data = await response.json();        
        const currentCondition = data.current_condition[0];

        const temp_C = currentCondition.temp_C;
        const humidity = currentCondition.humidity;
        const weatherDesc = currentCondition.weatherDesc[0].value;

        
        console.log(`\n=== 🌤️ LIVE WEATHER REPORT ===`);
        console.log(`📍 City: ${city.toUpperCase()}`);
        console.log(`🌡️ Temperature: ${temp_C}°C`);
        console.log(`💧 Humidity: ${humidity}%`);
        console.log(`☁️ Weather: ${weatherDesc}`);
        console.log(`=============================\n`);

    } catch (error) {

        console.error("❌ Error:", error.message);
    }
};


getWeatherData("Rajkot");