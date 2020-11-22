// when page loads, this function runs
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let tempDesc = document.querySelector('.temp-description');
    let tempDegree = document.querySelector('.temp-degree');
    let locTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //const api = 'api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=630aa0a3ac3a1273f7ec813b0354d438';

            const api = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=630aa0a3ac3a1273f7ec813b0354d438&units=metric';

            fetch(api)
                .then(response =>{
            return response.json();
            })
            .then(data =>{
                const {temp} = data.main;
                const {description} = data.weather[0];
                const {name} = data;
                // set DOM elements using API
                tempDegree.textContent = temp;
                tempDesc.textContent = description;
                locTimezone.textContent = name;
                // set icon
                setIcons(); //  need to come up with a method to decide which icon to use
            })

        });
    }
    // else 
    // {
    //     h1.textContent("ERROR! Browser does not support geolocation or somethings blocking it.")
    // }

    function setIcons()
    {
        var skycons = new Skycons({"color": "white"});
        skycons.add(document.getElementById("icon"), Skycons.PARTLY_CLOUDY_DAY);
        skycons.play();
    }
});