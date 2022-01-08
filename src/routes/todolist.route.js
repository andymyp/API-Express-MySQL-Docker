const express = require("express");

const {
  getTodolists,
  addTodolist,
  getTodolist,
  updateTodolist,
  deleteTodolist,
} = require("../controllers/todolist.controller");

const router = express.Router();

router.route("/").get(getTodolists).post(addTodolist);

router
  .route("/:id")
  .get(getTodolist)
  .patch(updateTodolist)
  .delete(deleteTodolist);

module.exports = {
  routes: router,
};
