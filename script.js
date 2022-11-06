const url ="https://api.openweathermap.org/data/2.5/"
const key = '958c824a7a5063906bbe44631147a652'
// https://home.openweathermap.org/



var images = [
    '1.jpg',
    "2.jpg",
    "3.jpg",
    "4.jpg"
    ];

    var img = document.getElementById("img");


function imgDisp(num){
    var num = Math.floor(Math.random() * 4);
    img.style.backgroundImage = 'url("' + images[num] +'")';
    img.style.backgroundRepeat = "no-repeat";
    }
    imgDisp();

// Her sayfayi yeniledigimizde background degisiyor.

const setQuery = (e) =>{        //parametrede eventi yakalayacagiz o yuzden e koyduk.
  if(e.keyCode =='13')   //13 e esitse enter'a basma islemi gerceklesmis demektir.
     getResult(searchBar.value) //sehir ismi almak icin
}

const getResult = (cityName) => {
    // console.log(cityName);      /deneme yaptik
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`
    // istegimizi olusturabilmek icin fetch'ten yaralanabiliriz.

    fetch( query )
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`

}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener("keypress",setQuery) // enter tusuna basildiginda sehir girilmis olsun.


