import { Router } from "express";
import { createUser } from "../controllers/user.controller";
import { auth_jwt } from "../middlewares";
const router = Router();

router.post(
  "/crearUsuario",
  [auth_jwt.verify_token, auth_jwt.is_admin],
  createUser
);

export default router;
