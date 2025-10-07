const express = require("express");
const router = express.Router();

const demoData = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

router.get("/", (req, res) => {
  res.json({
    success: true,
    errors: [],
    data: {
      users: demoData,
    },
  });
});

router.get("/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    return res
      .status(400)
      .json({ success: false, errors: ["Invalid user ID"] });
  }
  if (req.params.id < 1 || req.params.id > demoData.length) {
    return res.status(404).json({ succes: false, errors: ["User not found"] });
  }
  res.json({
    success: true,
    errors: [],
    data: {
      user: demoData[req.params.id - 1],
    },
  });
});

module.exports = router;
