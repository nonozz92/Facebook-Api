import { Router } from "express";
import * as AuthenticationController from "../../controllers/authentication.controller";

const api = Router();

api.post("/register", AuthenticationController.register);
api.post("/login", AuthenticationController.login);

export default api;
