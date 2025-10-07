const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    data: {
      users: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" },
      ],
    },
  });
});

router.get("/:id", (req, res) => {
  res.json({ message: `Get user with id ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.json({ message: "Create a new user" });
});

module.exports = router;
