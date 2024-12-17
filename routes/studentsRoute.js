const express = require("express");
const router = express.Router();
const students = require("../data.json");

router.get("/above-threshold", (req, res) => {
  const threshold = Number(req.query.threshold);

  const result = students
    .filter((student) => student.total > threshold)
    .map((student) => ({ name: student.name, total: student.total }));

  res.json({
    count: result.length,
    students: result,
  });
});

module.exports = router;
