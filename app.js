const express = require("express")
const https = require("https")

const app = express()

app.get('/', function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?appid=9736210d987027306218363edfd5e7c5&q=cleveland,US&units=metric"
    
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function(data){
            const = weatherData JSON.parse(data)
        })

    })


    res.send("server is up and running babay!")

})




app.listen(3000, function () {
    console.log("server is running on port 3000.")
})