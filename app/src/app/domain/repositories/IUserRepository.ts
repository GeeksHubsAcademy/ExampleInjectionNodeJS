import { UserDto } from '../dtos/UserDTO';

export interface IUserRepository  {
  create(user:UserDto):Promise<UserDto>;
}
