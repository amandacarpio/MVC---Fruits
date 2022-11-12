const fruits = [
    {
        name: "apple",
        color: "red",
        readyToEat: true
    },
    {
        name: "pear",
        color: "green",
        readyToEat: false
    },
    {
        name: "banana",
        color: "yellow",
        readyToEat: true
    },
];

module.exports = fruits // here we're telling js that we want the fruits variable from this file to be the result of the require() statement in the server.js file // able to export out the variable named fruits in this file 