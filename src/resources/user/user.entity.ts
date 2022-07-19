import { Column, Entity } from "typeorm";
import { IsEmail } from "class-validator";
import { BaseEntity } from "../base/base.entity";

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ select: false })
  password: string;
}
