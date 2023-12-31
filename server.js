const express = require('express');
const cors = require('cors');
const jsonc = require('jsonc')
const app = express();
//const dateFunction = require('./controller.js')

require('dotenv').config();
const port = process.env.Port || 3000

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


    
     


// Endpoint
app.get('/api', (req, res) => {

     //get current day 
     const todays_day = new Date().toLocaleDateString('en-US', { weekday: 'long' });

     // Format the date in "yyyy-MM-ddTHH:mm:ssZ" format
     const todays_time = new Date().toISOString().replace(/\.\d+Z$/, 'Z');

    // get parameters
    const slack_name = req.query.slack_name;
    const track = req.query.track

    // Status code 
    const statusCode = res.statusCode;




    // Creat JSON response
    const responseObject = {
        "slack_name": slack_name,
        "current_day": todays_day,
        "utc_time": todays_time,
        "track": track,
        "github_file_url": "https://github.com/Tesvin/Create-and-host-and-endpoint-HNGi/blob/main/server.js",
        "github_repo_url": "https://github.com/Tesvin/Create-and-host-and-endpoint-HNGi",
        "status_code": statusCode
    }

    res.send(responseObject)
   
}) 

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})