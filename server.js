require("dotenv").config();
const express = require("express");
const app = express();
const fruitController = require('./controller/fruitsController'); // here we're connecting the controller js file to this one
app.use(fruitController); // we're telling express to use this controller file

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});