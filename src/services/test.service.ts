import { Test } from "../entity/test.entity";
import { CrudService } from "./base.service";

export class TestService {
  service: CrudService<Test>;

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

const crudService = new CrudService(Test);
const testService = new TestService(crudService);

export default testService;
