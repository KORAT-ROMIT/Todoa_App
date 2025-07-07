//Core module
const path = require("path");

//External Module
const express = require("express");

const { default: mongoose } = require("mongoose");
const cors = require("cors");
const DB_PATH =
  "mongodb+srv://koratromit29:romit2006@koratromit.qvmbl4c.mongodb.net/todo?retryWrites=true&w=majority&appName=koratromit";

//Local module
const errorsController = require("./controllers/error");
const todoItemRouter = require("./routes/todoItemRouter");

const app = express();

app.use(express.urlencoded()); // yha par hamne perser ko short-cut use kiya he.

app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemRouter);

app.use(errorsController.pageNotFound);

const PORT = 3001;

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("conneted to mongo");
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error while connecting to mongo:", error);
  });
