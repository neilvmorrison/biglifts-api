import { User } from "../user/user.entity";
import userService from "../user/user.service";
import { compareHash } from "../../utils/hash";
import { generateToken } from "../../utils/token";
import { HttpError } from "../error";

export type AuthenticationResult = {
  isAuthenticated: boolean;
  token: string;
};

export class AuthService {
  async authenticateUser(
    email: string,
    password: string
  ): Promise<AuthenticationResult | HttpError> {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      throw new HttpError(404, "User Not found!");
    }
    const matchingPass = await compareHash(password, user.password);
    if (user && matchingPass) {
      const token = generateToken(user.id);
      return {
        isAuthenticated: true,
        token,
      };
    } else {
      throw new HttpError(401, "Unauthorized");
    }
  }

  async logoutUser(): Promise<void> {}
}
