import { Exercise, MajorGroup } from "../entity/exercise.entity";
import { CrudService } from "./base.service";

export class ExerciseService {
  service: CrudService<Exercise>;

  constructor(service) {
    this.service = service;
  }

  async getAllExercises() {
    return this.service.findAll();
  }

  async getExerciseById(id: string): Promise<Exercise> {
    return this.service.findOneBy({ id });
  }

  async getExercisesByMajorGroup(major_group: MajorGroup): Promise<Exercise[]> {
    return this.service.findMany({ where: { major_group } });
  }

  async createExercise(payload: Exercise): Promise<Exercise> {
    return this.service.create(payload);
  }
}

const exerciseCrudService = new CrudService(Exercise);
const exerciseService = new ExerciseService(exerciseCrudService);

export default exerciseService;
