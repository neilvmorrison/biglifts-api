import { Test } from "./test.entity";
import { BaseService } from "../base/base.service";

export class TestService {
  service: BaseService<Test>;

  constructor(service) {
    this.service = service;
  }

  async create(payload: Test): Promise<Test> {
    return this.service.create(payload);
  }

  async findAll(): Promise<Test[]> {
    return this.service.findAll();
  }
}

const crudService = new BaseService(Test);
const testService = new TestService(crudService);

export default testService;
