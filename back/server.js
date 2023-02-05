//const https = require("https");
//const fs = require("fs");

const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");
db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:9000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.get("/redirect/", (req, res) => {

  fetch("https://atlassian.example.com/rest/oauth2/latest/authorize?client_id=Md9m4iPONyE0wVWJQ4Bv2qAvZT4CCweJ&redirect_uri=test.depressive.fun&response_type=ATOAiMg6AavU-MbP0jqBy6kDvZB5-RrxHQ4MwKhJNxpuWc_70EoMM1gkPR4iaaAWbd17F90B5F31&state=STATE&scope=SCOPE&code_challenge=CODE_CHALLENGE&code_challenge_method=S256")
  .then((response) => {console.log(response); return response.json();})
  .then((data) => res.send(data))
  .catch(err => {
    res.status(500).send({
      message: "Error redirect with " + err,
    });
  });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// https
//   .createServer(
//     {
//       key: fs.readFileSync("./cert/key.pem"),
//       cert: fs.readFileSync("./cert/cert.pem"),
//     }, app)
//   .listen(443, ()=>{
//     console.log('server is runing at port 443')
//   });