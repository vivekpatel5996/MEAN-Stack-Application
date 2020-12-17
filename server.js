const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();



var corsOptions = {
    origin: "http://localhost:4200"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welocome to the Application. Developed by Vivek Patel!" })
})

require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Booom !! Application Started on ${PORT}`)
})


const db = require("./app/models");

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Ohhh Yeah! Connected to database!")
    })
    .catch(err => {
        console.log("Ohh shit ! didn't connected")
        process.exit()
    })
