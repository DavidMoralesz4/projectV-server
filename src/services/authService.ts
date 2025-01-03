import { IUser, User } from "../models/Users";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { SECRET_KEY } from "../config";

export const registerService = async ({ username, email, password }: IUser) => {
  // 1. Validar que no exista el email y el username
  // Validaciones de username, email y password (opcional: usar zod).

  const validateEmail = await User.findOne({ email });
  const validateUsername = await User.findOne({ username });

  if (validateEmail) {
    throw new Error("El correo ya existe!");
  }

  if (validateUsername) {
    throw new Error("El nombre de usuario ya existe!");
  }

  // 2. Encriptar la password
  const hashPassword = await bcrypt.hash(password, 10);

  // 3. Crear el usuario en la DB

  const userCreated = new User({
    username,
    email,
    password: hashPassword,
  });

  // 4. guardamos el usuario creado en la DB
  const userSaved = await userCreated.save();

  return { user: userSaved };
};

export const loginService = async ({ email, password, username }: IUser) => {
  // 1. Asegurar que el usuario esta registrado (Atravez del email)
  const user = await User.findOne({ email });
  const token = jwt.sign(
    {  _id: user?._id, username: user?.username, password: user?.password, email: user?.email } , SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );

  if (!user) throw new Error("El correo no esta registrado");

  // 2. Asegurar que el usuario es valido usando el (compare)
  // Aqui comparamos el pass que nos pasan y el de la base de datos=> devuelve true-false
  const isValid = await bcrypt.compare(password, user.password);

  // 3. Validar la contrasena (si ess incorrecta lanza error)
  if (!isValid) {
    throw new Error("La contrasena es invalida");
  }

  return { user, token };
};
