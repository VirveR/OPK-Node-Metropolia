// Node.js @Metropolia AMK
// Luku 3, uuden palvelimen luonti
// Virve Rajasärkkä 2023

//ottaa käyttöön Node.js:n http-moduulin
const http = require('http');
const port = 3000;

//palauttaa serveri-olion, joka käsittelee yllä määrätyn portin kautta
//sille tulevat pyynnöt (req/uest) ja vastaukset niihin (res/ponse)
const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, () => {
    console.log(`Server is running at port ${port}.`);
});

//jei, toimii!