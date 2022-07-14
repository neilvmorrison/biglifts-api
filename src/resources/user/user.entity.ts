import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { IsEmail, IsOptional, MinLength } from "class-validator";
import { BaseEntity } from "../base/base.entity";
import { Metric } from "../metric/metric.entity";
import { Set } from "../set/set.entity";
import { Workout } from "../workout/workout.entity";
import { Program } from "../program/program.entity";

@Entity()
export class User extends BaseEntity {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  middle_name: string;

  @Column({ nullable: true })
  birthdate: Date;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password: string;

  // ugh I hate that I have to write this but Canada sucks with measurement.
  @Column({ default: false })
  prefers_metric: boolean;

  @OneToMany(() => Metric, (metric) => metric.user)
  metrics: Metric[];

  @OneToMany(() => Workout, (workout) => workout.user)
  workouts: Workout[];

  @OneToMany(() => Set, (set) => set)
  sets: Set[];

  @ManyToMany(() => User, (user) => user.following)
  @JoinTable()
  followers: User[];

  @ManyToMany(() => User, (user) => user.followers)
  following: User[];

  programs: Program[];
}
