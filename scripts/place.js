function calculateWindChill(temperature, windSpeed){
    return 35.74 + 0.6215 * temperature - 35.75* (windSpeed**.16) + .4275 * temperature * (windSpeed**.16);
}
const temperature = 28;
const windSpeed = 4.8;
const windChillItem = document.querySelector("#wind-chill");
if (temperature <= 50 && windSpeed > 3)
{
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillItem.textContent = `${windChill.toFixed(2)}°F`;
}
else
{
    windChillItem.textContent = "NA";
}

