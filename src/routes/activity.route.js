const express = require("express");

const {
  getActivities,
  addActivity,
  getActivity,
  updateActivity,
  deleteActivity,
} = require("../controllers/activity.controller");

const router = express.Router();

router.route("/").get(getActivities).post(addActivity);

router
  .route("/:id")
  .get(getActivity)
  .patch(updateActivity)
  .delete(deleteActivity);

module.exports = {
  routes: router,
};
