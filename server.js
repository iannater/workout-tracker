const express = require("express");
const mongoose = require("mongoose");
//This is a logging package that we used in activity 7. 
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
require("./routes/api-routes.js")(app);
require("./routes/api-html.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});