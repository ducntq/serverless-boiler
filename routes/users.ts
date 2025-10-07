import express, { Request, Response } from "express";
const router = express.Router();

const demoData = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
];

router.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    errors: [],
    data: {
      users: demoData,
    },
  });
});

router.get("/:id", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res
      .status(400)
      .json({ success: false, errors: ["Invalid user ID"] });
  }
  if (userId < 1 || userId > demoData.length) {
    return res.status(404).json({ succes: false, errors: ["User not found"] });
  }
  res.json({
    success: true,
    errors: [],
    data: {
      user: demoData[userId - 1],
    },
  });
});

export default router;
