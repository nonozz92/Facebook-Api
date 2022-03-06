import { Router } from "express";
import * as PostController from "../../controllers/posts.controller";

const api = Router();

api.post("/", PostController.createNew);
api.get("/:id", PostController.findOne);
api.get("/", PostController.findAll);
api.patch("/:id", PostController.updateOne);
api.delete("/:id", PostController.deleteOne);

export default api;
