//---Hello Express!---

const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const { request } = require('http');

const app = express();

// Define paths for Express config
const publicDirectory = path.join(path.join(__dirname, '../public'));
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

//Setup static directory to serve
app.use(express.static(publicDirectory));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Andrew Mead'
    });
})

//Error on this weather due to geocode and forecast
// app.get('/weather', (req, res) => {
//     if (!req.query.address) {
//         return res.send({
//             error: 'YOu must provide an address!'
//         })
//     }

//     geocode(req.query.address, (error, { latitude, longitude, location }) => {
//         if (error) {
//             return res.send({ error });
//         }

//         forecast(latitude, longitude, (error, forecastData) => {
//             if (error) {
//                 return res.send({ error });
//             }

//             res.send({
//                 forecast: forecastData,
//                 location,
//                 address: request.query.address
//             })
//         })
//     })



// res.send({
//     forecast: 'It is snowing',
//     location: 'Philippines',
//     address: req.query.address
// }); // localhost:3000/weather
// })

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term!'
        })
    }

    console.log(req.query.search);
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    });
})

//Why this is in the last --because it is looking for those that unmatch on the top or article that does not declared
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000'); // localhost:3000
})