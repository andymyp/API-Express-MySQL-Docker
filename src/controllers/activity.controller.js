const Activity = require("../models/activity.model");
const Todolist = require("../models/todolist.model");

const getActivities = async (req, res) => {
  try {
    let activity = {};

    if (req.query.email) {
      activity = await Activity.findAll({
        attributes: ["id", "title", "createdAt"],
        where: { email: req.query.email },
        limit: 1000,
      });
    } else {
      activity = await Activity.findAll({
        attributes: ["id", "title", "createdAt"],
      });
    }

    res.status(200).send({
      total: activity.length,
      limit: 1000,
      skip: 0,
      data: activity,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const addActivity = async (req, res) => {
  try {
    let activity = await Activity.create(req.body);

    res.status(201).send(activity);
  } catch (error) {
    res.send({ message: error.message });
  }
};

const getActivity = async (req, res) => {
  try {
    let activity = await Activity.findOne({
      attributes: ["id", "title", "createdAt"],
      where: { id: req.params.id },
    });

    let todolist = await Todolist.findAll({
      attributes: ["id", "title", "priority", "is_active", "activity_group_id"],
      where: { activity_group_id: req.params.id },
    });

    res.status(200).send({
      id: activity.id,
      title: activity.title,
      createdAt: activity.createdAt,
      todo_items: todolist,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};

const updateActivity = async (req, res) => {
  try {
    let activity = await Activity.update(req.body, {
      where: { id: req.params.id },
    });

    let data = await Activity.findOne({ where: { id: req.params.id } });

    res.status(200).send(data);
  } catch (error) {
    res.send({ message: error.message });
  }
};

const deleteActivity = async (req, res) => {
  try {
    let activity = await Activity.destroy({ where: { id: req.params.id } });

    res.status(200).send([{}]);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = {
  getActivities,
  addActivity,
  getActivity,
  updateActivity,
  deleteActivity,
};
