// External module

const express = require("express");
const todoItemRouter = express.Router();

//Local Module
const todoItmesController = require("../controllers/todoItemsController");

todoItemRouter.get("/", todoItmesController.getTodoItems);
todoItemRouter.post("/", todoItmesController.createTodoItem);
todoItemRouter.delete("/:id", todoItmesController.deleteTodoItem);
todoItemRouter.put("/:id/completed", todoItmesController.markCompleted);

module.exports = todoItemRouter;
