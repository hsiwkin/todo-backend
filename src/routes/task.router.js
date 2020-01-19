const express = require("express");
const router = express.Router();
const TaskModel = require("../models/task.model");

// all tasks
router.get("/api/task", async (req, res) => {
  const allTasks = await TaskModel.find();
  res.status(200).json(allTasks);
});

// new task
router.post("/api/task", async (req, res) => {
  const { description } = req.body;

  if (description) {
    const taskModel = new TaskModel({ description, completed: false });
    const dbRes = await taskModel.save();
    res.status(200).json({
      id: dbRes._id
    });
  } else {
    res.status(422);
  }
});

router.put("/api/task/complete", async (req, res) => {
  const { _id, completed } = req.body;

  await TaskModel.updateOne(
    { _id },
    {
      completed
    }
  );

  res.status(200).json({
    _id
  });
});

// delete completed
router.delete("/api/task/completed", async (req, res) => {
  const result = await TaskModel.deleteMany({
    completed: true
  });

  res.status(200).json({
    deletedCount: result.deletedCount
  });
});

module.exports = app => app.use(router);
