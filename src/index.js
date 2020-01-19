const app = require("express")();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const connect = require("./loaders/db");

require("dotenv").config({
  path: path.join(__dirname, "config", "app.env")
});

app.use(bodyParser.json());
app.use(cors());
require("./routes/task.router")(app);

(async () => {
  await connect();

  app.listen(process.env.PORT, () => {
    console.log(`Server was started at http://localhost:${process.env.PORT}`);
  });
})();
