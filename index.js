const { application } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));

app.listen(port, () => {
    console.log('Listening at http://localhost:'+port);
})