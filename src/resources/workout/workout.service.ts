import { Workout } from "./workout.entity";
import { BaseService } from "../base/base.service";

export class WorkoutService {
  service: BaseService<Workout>;

  constructor(service) {
    this.service = service;
  }

  async createWorkout(payload: Workout): Promise<Workout> {
    return this.service.create(payload);
  }

  async createManyWorkouts(payload: Workout[]): Promise<Workout[]> {
    return this.service.createMany(payload);
  }

  async updateWorkout(id: string, payload: Partial<Workout>): Promise<Workout> {
    return this.service.findOneAndUpdate(id, payload);
  }

  async getWorkoutById(id: string): Promise<Workout> {
    return this.service.findOne({ where: { id }, relations: ["user", "sets"] });
  }
}

const crudService = new BaseService(Workout);
const workoutService = new WorkoutService(crudService);

export default workoutService;
