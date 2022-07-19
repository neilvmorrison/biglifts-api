import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { Exercise } from "../exercise/exercise.entity";
import { Profile } from "../profile/profile.entity";

@Entity()
export class Program extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ nullable: true })
  avatar_url: string;

  @ManyToOne(() => Profile, (profile) => profile.programs)
  author: Profile;

  @ManyToMany(() => Exercise, (exercise) => exercise)
  @JoinTable()
  core_exercises: Exercise[];
}
