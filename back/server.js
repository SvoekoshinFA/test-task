//const https = require("https");
//const fs = require("fs");

const cookieParser = require('cookie-parser')
const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");
db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/oauth.routes")(app);
require("./app/routes/task.routes")(app);
require("./app/routes/document.routes")(app);

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