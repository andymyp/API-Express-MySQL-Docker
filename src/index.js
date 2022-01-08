const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const activityRouter = require("./routes/activity.route");
const todolistRouter = require("./routes/todolist.route");

dotenv.config();

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3030;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ message: "Server running" });
});

app.use("/activity-groups", activityRouter.routes);
app.use("/todo-items", todolistRouter.routes);

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
