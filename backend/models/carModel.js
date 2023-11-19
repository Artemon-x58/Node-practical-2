// {
//     "title": "citroen",
//     "color": "grey",
//     "price": "50000",
//     "year": "2021"
// }
const { model, Schema } = require("mongoose");

const carSchema = new Schema({
  title: {
    type: String,
    required: [true, "db: title is required"],
  },
  color: {
    type: String,
    required: [true, "db: color is required"],
  },
  price: {
    type: Number,
    default: 10000,
  },
  year: {
    type: Number,
    default: 2010,
  },
});

module.exports = model("car", carSchema);
