const express = require('express');


const os = require('os')
const hostname  = os.hostname()
const app = express();


const interfaces = os.networkInterfaces();

const addresses = [];
for (const k in interfaces) {
    for (const k2 in interfaces[k]) {
        const address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

console.log(addresses);


app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <p>Try sending a request to /error and see what happens</p>
    <p>my name is: ${hostname}</p>
    <p>my address is ${addresses[0]}</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});




app.listen(8080);
