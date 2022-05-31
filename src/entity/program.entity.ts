import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { BaseEntity } from "./base.entity";
import { Exercise } from "./exercise.entity";
import { User } from "./user.entity";

@Entity()
export class Program extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ nullable: true })
  avatar_url: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  author: User;

  @ManyToMany(() => Exercise, (exercise) => exercise.id)
  @JoinTable()
  core_exercises: Exercise[];
}
