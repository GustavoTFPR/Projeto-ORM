import { SubjectRemovedAndUpdatedError } from "typeorm";
import { PostController } from "../controller/PostController";
import { Router } from "express";

const router = Router();
const postController = new PostController();

router.get("/", (req, res) => postController.list(req, res));
router.post("/", (req, res) => postController.create(req, res));

export const postRoutes = router;