import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { User } from "../user/user.entity";

export type UnitTypes = "IMPERIAL" | "METRIC";
export type MetricType = "TIME" | "WEIGHT" | "REP_MAX";
export type Units = "SECONDS" | UnitTypes;

@Entity()
export class Metric extends BaseEntity {
  @Column()
  type: MetricType;

  @Column()
  value: number;

  @Column()
  unit: Units;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;
}
