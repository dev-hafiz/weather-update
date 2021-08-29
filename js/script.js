document.getElementById('search-button').addEventListener('click', () => {
     const inputFiled = document.getElementById('input-filed');
     const inputText = inputFiled.value;
     inputFiled.value = '';

     const url = (`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=84b7e6450864e01bc6c7ca196cf39429`)

     fetch(url)
          .then(res => res.json())
          .then(data => {
               displayWeater(data);
          })
})

const displayWeater = data => {

     const localityName = document.getElementById('locality');
     const temp = document.getElementById('temp');
     const natureType = document.getElementById('nature');
     const temperatureX = data.main.temp - 273.15;
     const temperature = temperatureX.toFixed(2);
     localityName.innerHTML = `${data.name} `
     natureType.innerHTML = `${data.weather[0].main}`
     temp.innerHTML = temperature;

}