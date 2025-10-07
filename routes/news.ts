import express, { Request, Response } from "express";
const router = express.Router();

const demoData = [
  { id: 1, title: "News 1" },
  { id: 2, title: "News 2" },
  { id: 3, title: "News 3" },
];

router.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    errors: [],
    data: {
      news: demoData,
    },
  });
});

router.get("/:id", (req: Request, res: Response) => {
  const newsId = parseInt(req.params.id, 10);
  if (isNaN(newsId)) {
    return res
      .status(400)
      .json({ success: false, errors: ["Invalid news ID"] });
  }
  if (newsId < 1 || newsId > demoData.length) {
    return res.status(404).json({ succes: false, errors: ["News not found"] });
  }
  res.json({
    success: true,
    errors: [],
    data: {
      news: demoData[newsId - 1],
    },
  });
});

export default router;
