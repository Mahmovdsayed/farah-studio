"use server";

import { connectToDatabase } from "@/lib/dbConnection";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const loginFunc = async (email: string, password: string) => {
  connectToDatabase();
  try {
    const isEmailExists = await User.findOne({ email });
    if (!isEmailExists) return "invalid login credentials";

    const isPassMatched = bcrypt.compareSync(password, isEmailExists.password);
    if (!isPassMatched) return "invalid login credentials";

    const userData = {
      _id: isEmailExists._id,
      email: isEmailExists.email,
      firstName: isEmailExists.firstName,
      secondName: isEmailExists.secondName,
      image: isEmailExists.image,
    };

    const token = jwt.sign(
      {
        id: isEmailExists._id,
        userEmail: isEmailExists.email,
        userName: isEmailExists.username,
        firstName: isEmailExists.firstName,
        secoundName: isEmailExists.secondName,
        verifed: isEmailExists.verifed,
        Userimage: isEmailExists.image,
      },
      process.env.LOGIN_SIG || "",
      { expiresIn: "1d" }
    );

    (await cookies()).set("userToken", token, {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });
    return `Welcome back ${isEmailExists.firstName} ${isEmailExists.secondName} 👋`;
  } catch (error: any) {
    console.log(error);
    return "invalid login credentials";
  }
};

export default loginFunc;
