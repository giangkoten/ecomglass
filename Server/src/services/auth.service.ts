import { createOne } from "./user.service";
import bcrypt from "bcrypt";
import * as userService from "./user.service";
import jwt, { Secret } from "jsonwebtoken";

export const signUp = async (name: string, email: string, password: string) => {
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  return createOne(name, email, hashPassword);
};

export const signIn = async (email: string, password: string) => {
  try {
    const findUser = await userService.findOneByEmail(email);
    const [row]: any = findUser;
    if (row.length == 0) {
      return {
        message: "Không tìm thấy email",
      };
    } else {
      const hashPassword = row[0].userPassword;
      const compare = bcrypt.compareSync(password, hashPassword);
      if (!compare) {
        return {
          message: "Sai mật khẩu",
        };
      } else {
        const access_token = jwt.sign(
          { data: { id: row[0].user_id, email: row[0].email } },
          process.env.TOKEN_SECRET as Secret,
          { expiresIn: 60 * 60 }
        );
        return {
          message: "Đăng nhập thành công",
          access_token,
          id: row[0].userId,
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
};
