

const mongoose = require('mongoose');
const Quotes = require('./models/Quote');

let dummyArray = [
    {
        author: "Lord",
        text: "Aadmi ka jeevan ek sangharsh h , harna ya jeetna nhi",
    },

    {
        author: "God",
        text: "Zindagi mein jo bhi krna h usse krlo, sahi samay ka intazar mt kro kyonki samay kisi ke liye nhi rukhta h",
    },

    {
        author: "BhagwatGita",
        text: "Karm karo ,fal ki chinta mt karo",
    },
    {
        author: "BhagwatGita",
        text: "Karm karo ,fal ki chinta mt karo",
    },

    {
        author: "Legend",
        text: "You can do anything, Beleive in your self ",
    },
];

async function seedDB(){
    await Quotes.insertMany(dummyArray);     
    console.log("DB seeded");
}

module.exports = seedDB;








