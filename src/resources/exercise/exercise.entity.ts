import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base/base.entity";

export type ChestGroup = "PECTORAL";
export type BackGroup = "MIDDLE_BACK" | "LOWER_BACK" | "SHOULDER_ROTATOR";
export type ArmGroup = "BICEP" | "TRICEP" | "FOREARM";
export type ShoulderGroup = "DELTOID" | "TRAPEZIUS";
export type AbdominalGroup = "OBLIQUE" | "ABDOMINAL";
export type LegGroup = "QUADRACEP" | "HAMSTRING" | "CALF" | "GLUTE";

export type MajorGroup =
  | "CHEST"
  | "BACK"
  | "ARMS"
  | "SHOULDER"
  | "ABDOMINAL"
  | "LEG";

export type TargetGroup =
  | ChestGroup
  | BackGroup
  | ArmGroup
  | ShoulderGroup
  | AbdominalGroup
  | LegGroup;

@Entity()
export class Exercise extends BaseEntity {
  @Column()
  display_name: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  image_url: string;

  @Column()
  major_group: MajorGroup;

  @Column()
  target_group: TargetGroup;

  @Column({ default: false })
  is_custom: boolean;
}
