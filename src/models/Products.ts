import mongoose, { model, Schema } from "mongoose";

export interface IProduct extends Document {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: string;
  unidad: string;
  categoria: "Tecnologia" | "Ropa" | "Calzado";
}
// export interface IProduct {
//   name: string;
//   description: string;
//   img: string;
//   stock: string;
//   size?: "S" | "M" | "L" | "XL" | "38" | "40" | "39" ;
//   price: number;
//   category: "Tecnolog" | "zapatos" | "clothes" | "beauty" | "home";
//   brands:
//     | "Nike"
//     | "Adidas"
//     | "Puma"
//     | "Reebok"
//     | "Gucci"
//     | "Jordan"
//     | "Oversize";
// }

// const productSchema = new Schema<IProduct>({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   img: { type: String, required: true },
//   stock: { type: String, required: true },
//   size: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { type: String, required: true },
//   brands: { type: String, required: true },
// });

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: {type: String, required: true },
  precio: { type: Number, required: true },
  unidad: { type: Number, required: true },
  categoria: { type: String, required: true },
});

export const Product = mongoose.model("Product", productSchema);
