import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Exercise } from "./exercise.entity";
import { UnitTypes } from "./metric.entity";
import { User } from "./user.entity";
import { Workout } from "./workout.entity";

@Entity()
export class Set extends BaseEntity {
  @OneToOne(() => Exercise, (exercise) => exercise.id)
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
