import { DeepPartial } from "typeorm";
import { generateHash } from "../../utils/hash";
import { User } from "./user.entity";
import { BaseService } from "../base/base.service";

export class UserService {
  service: BaseService<User>;
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
    return this.service.findOne({
      where: { id },
    });
  }

  async updateUser(id: string, payload: DeepPartial<User>) {
    return this.service.findOneAndUpdate(id, payload);
  }

  // async followUser(user_id: string, user_to_follow: string): Promise<any> {
  //   const payload = {
  //     following: [
  //       {
  //         id: user_to_follow,
  //       },
  //     ],
  //   };
  //   return this.updateUser(user_id, payload);
  // }
}

const crudService = new BaseService(User);
const userService = new UserService(crudService);

export default userService;
