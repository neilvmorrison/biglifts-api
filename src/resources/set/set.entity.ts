import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { Exercise } from "../exercise/exercise.entity";
import { UnitTypes } from "../metric/metric.entity";
import { User } from "../user/user.entity";
import { Workout } from "../workout/workout.entity";

@Entity()
export class Set extends BaseEntity {
  @ManyToOne(() => Exercise, (exercise) => exercise.id)
  @JoinColumn()
  exercise: Exercise;

  @Column()
  repetitions: number;

  @Column()
  value: number;

  @Column()
  unit: UnitTypes;

  @Column()
  is_complete: boolean;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Workout, (workout) => workout.id)
  @JoinColumn()
  workout: Workout;
}
