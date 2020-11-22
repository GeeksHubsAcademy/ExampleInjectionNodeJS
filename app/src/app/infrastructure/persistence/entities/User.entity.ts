import { Column, Entity, ObjectIdColumn } from "typeorm";
import { UserDto } from '../../../domain/dtos/UserDTO';

@Entity()
export class UserEntity implements UserDto{

  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  created_at?: Date;

  @Column()
  update_at?: Date;

}
