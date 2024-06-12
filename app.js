const mongoose = require('mongoose');
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
dotenv.config();

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = process.env.MONGODB_URL;

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  lastname: String,
});

const User = mongoose.model("User", UserSchema);

/**
 * @description Get All note
 * @route GET /utilisateurs
 */
const getAllUsers = (
    async function (req, res, next) {
      console.log("toto")
      //const users = await User.find({})
      //if (!users.length) return res.status(204).json({ message: "empty list" });

      return res.status(200).json({ utilisateurs: [] });
    }
  )
 

const router = express.Router();

router.route("/").get(getAllUsers);

const app = express();

const corsOptions = {
  origin: "http://localhost:3000", 
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// api routes

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use("/users", router);


module.exports = app;