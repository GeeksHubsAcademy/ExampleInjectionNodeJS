import { User } from '../../domain/models/User';
export interface IUserService{
  addUser(user:User):Promise<User>;
}
