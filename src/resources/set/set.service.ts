import { Set } from "./set.entity";
import { BaseService } from "../base/base.service";

export class SetService {
  service: BaseService<Set>;

  constructor(service) {
    this.service = service;
  }

  async createSet(payload: Set): Promise<Set> {
    return this.service.create(payload);
  }

  async createManySets(payload: Set[]): Promise<Set[]> {
    return this.service.createMany(payload);
  }

  async updateSet(id: string, payload: Partial<Set>): Promise<Set> {
    return this.service.findOneAndUpdate(id, payload);
  }
}

const crudService = new BaseService(Set);
const setService = new SetService(crudService);

export default setService;
