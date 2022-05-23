import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Set } from "./set.entity";
import { User } from "./user.entity";

@Entity()
export class Workout extends BaseEntity {
  @Column()
  name: string;

  @Column()
  is_complete: boolean;

  @Column({ type: "text" })
  notes: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @OneToMany(() => Set, (set) => set)
  sets: Set[];
}
