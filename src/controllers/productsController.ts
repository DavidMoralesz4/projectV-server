import { Request, Response } from "express";
import {
  categoryService,
  createProductsFromCSV,
  getProdService,
} from "../services/productsService";

export const allProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getProdService();

    res.status(200).json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ message: "Error interno del servidor..." });
  }
};

export const uploadProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const filePath = req.file?.path;

  if (!filePath) {
    res.status(400).json({ message: "Archivo no proporcionado" });
    return;
  }

  try {
    const products = await createProductsFromCSV(filePath);
    res
      .status(201)
      .json({ message: "Productos creados exitosamente", products });
  } catch (error) {
    console.error("Error en el controlador:", error);
    res
      .status(500)
      .json({ message: "Error al procesar el archivo CSV", error });
  }
};

export const getCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params; // Captura la categoría desde los parámetros de la URL
  try {

    // Busca todos los productos con esa categoría
    const products = await categoryService(id);

    if (products.length === 0) {
      res.status(404).json({ message: 'No se encontraron productos en esta categoría.' });
    }

    // Retorna los productos relacionados
    res.status(200).json(products);
} catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
}
};
