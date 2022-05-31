import { User } from "../entity/user.entity";

export type AuthenticationResult = {
  user?: User;
  isAuthenticated: boolean;
  token: string;
};

class AuthService {
  async authenticateUser(email, password): Promise<AuthenticationResult> {
    return {
      isAuthenticated: false,
      user: null,
      token: "this is a token",
    };
  }
}
