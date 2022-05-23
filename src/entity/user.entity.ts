import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Metric } from "./metric.entity";
import { Set } from "./set.entity";
import { Workout } from "./workout.entity";

@Entity()
export class User extends BaseEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ default: "" })
  middle_name: string;

  @Column()
  birthdate: Date;

  // ugh I hate that I have to write this but Canada sucks with measurement.
  @Column({ default: false })
  prefers_metric: boolean;

  @OneToMany(() => Metric, (metric) => metric)
  metrics: Metric[];

  @OneToMany(() => Workout, (workout) => workout)
  workouts: Workout[];

  @OneToMany(() => Set, (set) => set)
  sets: Set[];
}
