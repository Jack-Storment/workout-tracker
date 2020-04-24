const express = require("express");
const path = require("path");

//seed database.
//require("./seeders/seed");

//delete database
//require('./seeders/deleteSeed');

const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


//static routes
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.send('index.html');
});

app.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/exercise.html'));
});

app.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/stats.html'));
});

//use api routes
require('./routes')(app);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
