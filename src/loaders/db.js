const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "..", "config", "db.env")
});

const options = {
  useNewUrlParser: true
};

module.exports = () => {
  const connectionString = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/todo`;

  mongoose.connection.on("error", error => {
    console.error(error);
    throw error;
  });

  mongoose.connect(connectionString, options);
};
