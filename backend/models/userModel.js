const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "db: email is required"],
  },
  password: {
    type: String,
    required: [true, "db: password is required"],
  },
  name: {
    type: String,
    default: "Andrii",
  },
  roles: [{ type: String, ref: "roles" }],
  token: {
    type: String,
    default: null,
  },
});

module.exports = model("user", userSchema);
