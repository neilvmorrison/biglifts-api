import { DeepPartial } from "typeorm";
import { compareHash, generateHash } from "../utils/hash";
import { User } from "../entity/user.entity";
import { CrudService } from "./base.service";
import { generateToken } from "../utils/token";

type AuthenticatedResult = {
  isAuthenticated: boolean;
  token: string;
  user: User;
};

export class UserService {
  service: CrudService<User>;
  constructor(service) {
    this.service = service;
  }

  async createUser(payload: User): Promise<User> {
    const { password } = payload;
    const passwordHash = await generateHash(password);
    const createUserPayload = {
      ...payload,
      password: passwordHash,
    };
    return this.service.create(createUserPayload);
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.service.findOneBy({ email });
  }

  async getUserById(id: string): Promise<User> {
    return this.service.findOneBy({ id });
  }

  async updateUser(id: string, payload: DeepPartial<User>) {
    return this.service.findOneAndUpdate(id, payload);
  }

  async authenticateUser(
    email: string,
    password: string
  ): Promise<AuthenticatedResult> {
    const user = await this.getUserByEmail(email);
    const matchingPass = await compareHash(password, user.password);
    if (user && matchingPass) {
      const token = generateToken();
      delete user.password;
      return {
        isAuthenticated: true,
        token,
        user,
      };
    }
  }

  async followUser(following_id: string, follower_id: string): Promise<any> {
    const payload = {
      following: [
        {
          id: following_id,
        },
      ],
    };
    return this.updateUser(follower_id, payload);
  }
}

const crudService = new CrudService(User);
const userService = new UserService(crudService);

export default userService;
