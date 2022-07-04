import { Column, Entity } from "typeorm";
import { BaseEntity } from "../base/base.entity";

@Entity()
export class Test extends BaseEntity {
  @Column()
  test: string;
}
