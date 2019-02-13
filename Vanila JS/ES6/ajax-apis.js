// AJAX - Asynchronouse Javascript And Xml
//      - allows Asynchronouse communicate with remote service


// API - Application Programming Interface
//      - allow other application to communicate to each other

// Fetch and Promises

// using fetch to request a data from web server

//crossorigin.me
//  -allows developer to access resource from other websites.


//return a promise

function getWeatherToday(woeid) {

    fetch(`https://wwww.metaweather.com/api/location/${woeid}/`)
        .then(result => {

            constole.log(result);
            return result.json();

        })
        .then(data => {
            console.log(data.title);
        })
        .catch(error => {
            console.log(error);
        });

};

getWeatherToday(44418); //London



// Async/Await

async function getWeatherTodayAW(woeid) {
    const result = await fetch(`https://wwww.metaweather.com/api/location/${woeid}/`;
    const data = await result.json();
    console.log(data.title);

    return data;

};

let dataLondon;

getWeatherTodayAW(44418).then(data => {
    dataLondon = data;
    console.log(dataLondon);

} );