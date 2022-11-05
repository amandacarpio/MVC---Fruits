require("dotenv").config();
const express = require("express");
const app = express();

const fruits = [
    {
        name: "apple",
        color: "red",
        readyToEat: true,
    },
    {
        name: "pear",
        color: "green",
        readyToEat: false,
    },
    {
        name: "banana",
        color: "yellow",
        readyToEat: true,
    },
];

app.get("/fruits/", (req, res) => {
    res.send(fruits);
});

app.get("/fruits/:indexOfFruitsArray", (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
