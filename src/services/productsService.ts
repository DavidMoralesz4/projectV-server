import csvParser from "csv-parser";
import fs from "fs";
import { Product, IProduct } from "../models/Products";

// interface CSVProduct {
//     name: string;
//     description: string;
//     price: string;
//     stock: string;
// }

export const createProductsFromCSV = async (
  filePath: string
): Promise<IProduct[]> => {
  // const results: CSVProduct[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on("data", (row) => {
        const prosd = new Product({
          nombre: row.nombre,
          descripcion: row.descripcion,
          imagen: row.imagen,
          unidad: row.unidad,
          precio: row.unidad,
          categoria: row.categoria,
        });
        return prosd.save();
      })
      .on("end", resolve)
      .on("error", reject);
  });
};

export const categoryService = async (categoria: string) => {
  // Llamar la propideda categoy
  const products = await Product.find({categoria})


  return products
};


export const getProdService = async() => {
  const allProducts = await Product.find()

  return allProducts;
}