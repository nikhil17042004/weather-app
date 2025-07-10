const apiKey = "b39f1844d8cf7528a25641d3c3d800c6"; 


function getWeather() {
  const city = document.getElementById('city').value;
  if (city === '') {
    alert('Please enter a city name!');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        alert('City not found!');
        return;
      }
      
      const cityName = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;

  
      document.getElementById('cityName').textContent = `${cityName}`;
      document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
      document.getElementById('description').textContent = `Description: ${description}`;
      document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;

      document.getElementById('weatherInfo').style.display = 'block';
    })
    .catch(error => {
      alert('Error fetching data. Please try again later.');
    });
}
