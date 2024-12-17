import { Router } from "express";
import { createOrderController, getOrdersController } from "../controllers/ordersController";

export const ordersRoute: Router = Router()

ordersRoute.post("/orders/create", createOrderController)
ordersRoute.get("/orders", getOrdersController)
