import { Router } from "express";
import { allProductsController, getCategoryController, uploadProducts } from "../controllers/productsController";
import multer from "multer";
// import { authenticateToken } from "../middlewares/authenticateToken";
import upload from "../middlewares/middleware";

export const productRouter: Router = Router()
// const upload = multer({ dest: "uploads/" }); // Configuración de Multer para subir archivos

productRouter.get('/products', allProductsController)

productRouter.get('/products/:id', getCategoryController)

productRouter.post('/products/create/csv',  upload.single("file"), uploadProducts)



