import { DeleteResult } from "typeorm";
import { HttpError } from "../error";
import { BaseService } from "../base/base.service";
import { Profile } from "./profile.entity";

export class ProfileService {
  service: BaseService<Profile>;
  constructor(service) {
    this.service = service;
  }

  async getProfile(id: string): Promise<Profile> {
    const profile = await this.service.findOneBy({ id });
    if (!profile) {
      throw new HttpError(404, "Profile not found");
    }
    return profile;
  }

  async createProfile(payload: Profile): Promise<Profile> {
    return this.service.create(payload);
  }

  async updateProfile(id: string, payload: Partial<Profile>): Promise<Profile> {
    return this.service.findOneAndUpdate(id, payload);
  }

  async deleteProfile(id: string): Promise<DeleteResult> {
    return this.service.softDelete(id);
  }
}

const crudService = new BaseService(Profile);
const profileService = new ProfileService(crudService);

export default profileService;
