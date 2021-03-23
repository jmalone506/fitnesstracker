const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/apiroutes");
const morgan = require("morgan");


const PORT = process.env.PORT || 8080;

const app = express()

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    require("./routes/htmlroutes")(app)

    app.listen(PORT, function(){
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    })