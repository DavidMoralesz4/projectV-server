import mongoose, { model, Schema } from "mongoose";

export interface IProduct extends Document {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: string;
  unidad: string;
  categoria: "Tecnologia" | "Ropa" | "Zapatos" | "Hogar" | "Belleza";
}

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: {type: String, required: true },
  precio: { type: Number, required: true },
  unidad: { type: Number, required: true },
  categoria: { type: String, required: true },
});

export const Product = mongoose.model("Product", productSchema);
