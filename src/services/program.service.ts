import { CrudService } from "./base.service";
import { Program } from "../entity/program.entity";

export class ProgramService {
  service: CrudService<Program>;

  constructor(service) {
    this.service = service;
  }

  async createProgram(payload: Program): Promise<Program> {
    return this.service.create(payload);
  }

  async getAllPrograms(): Promise<Program[]> {
    return this.service.findAll();
  }

  async getProgramById(id: string): Promise<Program> {
    return this.service.findOne({
      where: { id },
      relations: ["core_exercises"],
    });
  }
}

const crudService = new CrudService(Program);
const programService = new ProgramService(crudService);

export default programService;
