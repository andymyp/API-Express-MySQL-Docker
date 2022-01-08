const Todolist = require("../models/todolist.model");

const getTodolists = async (req, res) => {
  try {
    let todolist = {};

    if (req.query.activity_group_id) {
      todolist = await Todolist.findAll({
        attributes: [
          "id",
          "title",
          "priority",
          "is_active",
          "activity_group_id",
        ],
        where: { activity_group_id: req.query.activity_group_id },
        limit: 10,
      });
    } else {
      todolist = await Todolist.findAll({
        attributes: [
          "id",
          "title",
          "priority",
          "is_active",
          "activity_group_id",
        ],
      });
    }

    res.status(200).send({
      total: todolist.length,
      limit: 10,
      skip: 0,
      data: todolist,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const addTodolist = async (req, res) => {
  try {
    let todolist = await Todolist.create(req.body);

    res.status(201).send(todolist);
  } catch (error) {
    res.send({ message: error.message });
  }
};

const getTodolist = async (req, res) => {
  try {
    let todolist = await Todolist.findOne({
      attributes: ["id", "title", "priority", "is_active"],
      where: { id: req.params.id },
    });

    res.status(200).send(todolist);
  } catch (error) {
    res.send({ message: error.message });
  }
};

const updateTodolist = async (req, res) => {
  try {
    let todolist = await Todolist.update(req.body, {
      where: { id: req.params.id },
    });

    let data = await Todolist.findOne({ where: { id: req.params.id } });

    res.status(200).send(data);
  } catch (error) {
    res.send({ message: error.message });
  }
};

const deleteTodolist = async (req, res) => {
  try {
    let todolist = await Todolist.destroy({ where: { id: req.params.id } });

    res.status(200).send([{}]);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = {
  getTodolists,
  addTodolist,
  getTodolist,
  updateTodolist,
  deleteTodolist,
};
