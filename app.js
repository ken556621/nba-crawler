const express = require("express");

const app = express();
const port = 3005;


const scoreCrawler = require("./crawler/scoreCrawler");



app.get("/api/score", (req, res) => {
    scoreCrawler("203081")
    res.send("NBA crawler")
})

app.listen(port, () => {
    console.log(`App is listening on http://localhost:${port}`)
});