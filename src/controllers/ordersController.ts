import { Request, Response } from "express";
import { createOrderService, getOrderService } from "../services/ordersService";

export const getOrdersController = async (req: Request, res: Response) => {
  try {
    const orders = await getOrderService();

    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en las ordenes." });
  }
};

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const { document, order } = req.body;

    if (!document || !order || !Array.isArray(order) || order.length === 0) {
      res.status(400).json({ error: "Cliente y productos son requeridos." });
    }

    const newOrder = await createOrderService(document, order);

    res.status(200).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la orden." });
  }
};
