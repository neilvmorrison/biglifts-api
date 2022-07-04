import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { Set } from "../set/set.entity";
import { User } from "../user/user.entity";

@Entity()
export class Workout extends BaseEntity {
  @Column()
  name: string;

  @Column()
  is_complete: boolean;

  @Column({ type: "text", nullable: true })
  notes: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @OneToMany(() => Set, (set) => set.workout)
  sets: Set[];
}
