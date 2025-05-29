import { validationResult } from "express-validator";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signIn = async (request, response, next) => {
  let { email, password } = request.body;
  let user = await User.findOne({ where: { email }, raw: true });
  if (user) {
    let dbPassword = user.password;
    let status = bcrypt.compareSync(password, dbPassword);
    return status
      ? response.status(200).json({ message: "Sign in success", user })
      : response.status(401).json({ error: "Unauthorized user" });
  }
  return response.status(401).json({ error: "Unauthorized user" });
};
export const signUp = async (request, response, next) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty())
      return response.status(401).json({ error: errors.array() });

    let result = await User.create(request.body);
    return response.status(201).json({ message: "user created..." });
  } catch (err) {
    console.log(err);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};
