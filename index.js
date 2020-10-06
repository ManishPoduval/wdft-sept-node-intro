console.log('YayyyyNode works')

//function that takes a path
// let students = require('./data.js')

// let {outro, printName } = require('./info')

// printName()

// console.log(outro)
//console.log(students)

// const chalk = require('chalk');
 
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.keyword('orange')('Yay for orange colored text!'));
// console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// console.log(chalk.hex('#DEADED').bold('Bold gray!'));


//CREATING A SERVER WITH NODEJS

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hey I\'m Manish');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// WE ARE USING EXPRESS TO CREATE A SERVER AND ROUTES

const express = require('express')
const app = express()


app.use((req, res, next) => {
    console.log('In the middleware')
    // if (request is from Europe) {
    //     next()
    // }
    next()
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) =>{
   res.sendFile(__dirname + '/views/landing.html')
})

app.get('/home', (req, res) =>{
    res.sendFile(__dirname + '/views/home.html')
})



// app.get('/home/:myCountry/:city', (req, res) =>{
//     let myCountry = req.params.myCountry
//     let myCity  = req.params.city
//     if (myCountry == 'france') {
//         res.send('Ma maison est à' + myCity + ' ' + myCountry)
//     }
//     else {
//         res.send('In my home in ' + myCountry)
//     }
// })

// app.get('/speak/:pet', (req, res) =>{
//     let pet = req.params.pet
//     switch (pet) {
//         case 'cow': 
//             res.send("The cow says 'Moo'");
//             break;
//         case 'pig': 
//             res.send("The pig says 'Oink!'");
//             break;
//         default:
//             res.send("Animal not found");         
//     }
// })


// app.get('/greet/:text/:num', (req, res) => {
//     let { text, num } = req.params
//     let output = ''
//     for (let i=0; i< num; i++){
//         output += text + ' '
//     }
//     res.send(output)
// })

app.get('*', (req, res) => {
    res.send('404 page')
})



app.listen(3000)