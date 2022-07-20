import { Column, Entity, OneToOne } from "typeorm";
import { IsEmail } from "class-validator";
import { BaseEntity } from "../base/base.entity";
import { Profile } from "../profile/profile.entity";

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column({ select: false })
  password: string;

  @OneToOne(() => Profile)
  profile: Profile;
}
