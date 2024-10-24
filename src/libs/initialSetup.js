import Role from "../models/role";
import Materia from "../models/materia";
import Usuario from "../models/user";

const create_roles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: "usuario" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

const crearMateria = async () => {
  try {
    const count = await Materia.estimatedDocumentCount();
    if (count > 0) return;

    const values = await Promise.all([
      new Materia({ nombre: "Algebra", grupo: "1" }).save(),
      new Materia({ nombre: "Ciencias Naturales", grupo: "3" }).save(),
      new Materia({ nombre: "Religion", grupo: "4" }).save(),
      new Materia({ nombre: "eduacion fisica", grupo: "1" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

const crearUsuario = async () => {
  try {
    const count = await Usuario.estimatedDocumentCount();
    if (count > 0) return;
    const roles_found = await Role.find({ name: { $in: "admin" } });
    const values = await Promise.all([
      new Usuario({
        username: "admin",
        email: "admin@hotmail.com",
        password: Usuario.encrypted_password("12345"),
        roles: roles_found.map((role) => role._id),
      }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export { create_roles, crearMateria, crearUsuario };
