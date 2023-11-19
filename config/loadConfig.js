const path = require("path");
const configPath = path.join(__dirname, ".env");
module.exports = require("dotenv").config({ path: configPath });
