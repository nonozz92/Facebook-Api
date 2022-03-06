import * as UserModel from "../models/user.model";
import jwt from "jsonwebtoken";
import { HttpException, HttpStatus } from "../errors/HttpException.error";

/* */
export const register = async ({ body }, response) => {
  const { email, password } = body;
  const user = await UserModel.createNewUser({
    email,
    password,
  });

  const profile = await UserModel.createNewProfile({
    firstName,
    lastName,
    userId: user.id,
  });
  response.json({
    data: {
      user,
      profile,
    },
  });
};

/* */
export const login = async ({ body }, response) => {
  const { email, password } = body;
  const user = await UserModel.findUserById({
    email,
    password,
  });
  if (!user) {
    throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
  }

  const token = jwt.sign({ id: user.id }, "SECRET");
  response.json({
    data: {
      user,
      token,
    },
  });
};
