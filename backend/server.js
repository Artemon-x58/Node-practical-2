require("../config/loadConfig");
const express = require("express");
const connectDb = require("../config/connectDb");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
require("colors");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/v1", require("./routes/carsRoutes"));

app.use("*", notFound);

app.use(errorHandler);

connectDb();

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`.green.italic.bold);
});
