import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

//import { create_roles, crearMateria, crearUsuario } from "./libs/initialSetup";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

import materiaRoutes from "./routes/materia.routes";

const app = express();


//create_roles();
//crearMateria();
//crearUsuario();
app.set("pkg", pkg);
app.set("json spaces", 4);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/usuario", userRoutes);
app.use("/auth", authRoutes);
app.use("/materias", materiaRoutes);
export default app;
