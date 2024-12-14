import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["acces_token"];

  if (!token)
    res.status(401).json({ message: "No token, autorizacion denegada" });
  console.log(token);
  

  jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
    if (err) return res.status(403).json({ message: "Token invalido" });

  });

  next()
};
