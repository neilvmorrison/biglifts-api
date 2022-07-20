import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from "typeorm";
import { User } from "../user/user.entity";
import { Metric } from "../metric/metric.entity";
import { Set } from "../set/set.entity";
import { Workout } from "../workout/workout.entity";
import { Program } from "../program/program.entity";
import { BaseEntity } from "../base/base.entity";

@Entity()
export class Profile extends BaseEntity {
  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  middle_name: string;

  @Column({ nullable: true })
  birthdate: Date;

  // ugh I hate that I have to write this but Canada sucks with measurement.
  @Column({ default: false })
  prefers_metric: boolean;

  @OneToMany(() => Metric, (metric) => metric.user)
  metrics: Metric[];

  @OneToMany(() => Workout, (workout) => workout.user)
  workouts: Workout[];

  @OneToMany(() => Set, (set) => set)
  sets: Set[];

  @ManyToMany(() => Profile, (profile) => profile.following)
  @JoinTable()
  followers: Profile[];

  @ManyToMany(() => Profile, (profile) => profile.followers)
  following: Profile[];

  programs: Program[];
}
