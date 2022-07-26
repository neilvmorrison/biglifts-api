import userService from "../user/user.service";
import { compareHash } from "../../utils/hash";
import { generateAccessToken, generateRefreshToken } from "../../utils/token";
import { HttpError } from "../error";

export type AuthenticationResult = {
  refresh_token: string;
  access_token: string;
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
      console.log(user);
      const access_token = generateAccessToken(user.id);
      const refresh_token = generateRefreshToken();
      return {
        refresh_token,
        access_token,
      };
    } else {
      throw new HttpError(401, "Unauthorized");
    }
  }

  async logoutUser(): Promise<void> {}
}
