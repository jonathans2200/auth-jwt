import Materia from "../models/materia";

export const crearMateria = async (req, res) => {
  const { nombre, grupo } = req.body;
  const nuevaMateria = new Materia({ nombre, grupo });
  const materiaGuardada = await nuevaMateria.save();

  res.status(201).json(materiaGuardada);
};

export const getMaterias = async (req, res) => {
  const materias = await Materia.find({});
  res.status(200).json(materias);
};

export const eliminarMaterias = async (req, res) => {
  const { id } = req.params;
  try {
    const materiaEliminada = await Materia.findByIdAndDelete(id);
    if (!materiaEliminada) {
      return res.status(404).json({ message: "Materia no encontrada." });
    }
    res.status(200).json({ message: "Materia eliminada correctamente." });
  } catch (error) {
    return res.status(500).json({ message: "Error eliminando la materia." });
  }
};

export const actualizarMateria = async (req, res) => {
  const { id } = req.params;
  const { nombre, grupo } = req.body;

  try {
    const materiaActualizada = await Materia.findByIdAndUpdate(
      id,
      { nombre, grupo },
      { new: true }
    );

    if (!materiaActualizada) {
      return res.status(404).json({ message: "Materia no encontrada." });
    }

    res.status(200).json(materiaActualizada);
  } catch (error) {
    return res.status(500).json({ message: "Error actualizando la materia." });
  }
};
