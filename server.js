const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const path = require('path')

var corsOptions = {
    origin: "http://localhost:8081"
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('frontend/dist', { dotfiles: 'allow' }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

//Sync DB
db.sequelize.sync({ force: true })
.then(() => {
    console.log("Synced db.");
})
.catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

require("./app/routes/turorial.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});