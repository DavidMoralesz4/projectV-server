import { Router } from "express";
import { allProductsController, getCategoryController, uploadProducts } from "../controllers/productsController";
import upload from "../middlewares/middleware";

export const productRouter: Router = Router()

productRouter.get('/products', allProductsController)

productRouter.get('/products/:id', getCategoryController)

productRouter.post('/products/create/csv',  upload.single("file"), uploadProducts)



