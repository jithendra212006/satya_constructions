const express = require("express");
const router = express.Router();
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// Map URLs to the controller functions
router.route("/").get(getProjects).post(createProject);
router.route("/:id").put(updateProject).delete(deleteProject);

module.exports = router;
