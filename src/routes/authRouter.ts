import { Router } from "express";
import {
  loginController,
  logoutController,
} from "../controllers/authController";
import { authenticateToken } from "../middlewares/authenticateToken";
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from "../config";

export const authRouter: Router = Router();


authRouter.get("/dashboard", authenticateToken, (req, res) => {
  
  const token = req.cookies['acces_token']

  const data = jwt.verify(token, SECRET_KEY)
  
  res
    .status(200)
    .json({ message: "Bienvenido al dashboard", data});
});

authRouter.post("/login", loginController);
authRouter.post("/logout", logoutController);
