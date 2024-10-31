import { Router } from "express";

import * as materiaCtrl from "../controllers/materia.controller";
import { auth_jwt } from "../middlewares";

const router = Router();

router.get(
  "/obtenerMaterias",
  
  materiaCtrl.getMaterias
);
router.post(
  "/crearMateria",
  [auth_jwt.verify_token, auth_jwt.is_admin],
  materiaCtrl.crearMateria
);
router.post(
  "/crearMateria",
  [auth_jwt.verify_token, auth_jwt.is_admin],
  materiaCtrl.crearMateria
);
router.put(
  "/actualizarMateria/:id",
  [auth_jwt.verify_token, auth_jwt.is_admin],
  materiaCtrl.actualizarMateria
);
router.get(
  "/obtenerMateria/:id",
  [auth_jwt.verify_token, auth_jwt.is_admin],
  materiaCtrl.obtenerMateriaId
);
router.delete(
  "/eliminarMateria/:id",
  [auth_jwt.verify_token, auth_jwt.is_admin],
  materiaCtrl.eliminarMaterias
);

export default router;
