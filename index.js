const express = require("express");
const app = express();

app.get("/", (req, res, next) => {

    res.send('Hello World!');
    next();

});

app.get("/message", (req, res, next) => {

    res.send("Hello Message!");
    next();

})

app.listen(3000, (error) => {

    if (error) {
        throw new error;
    }

    console.log(`The current server is running on`)
})