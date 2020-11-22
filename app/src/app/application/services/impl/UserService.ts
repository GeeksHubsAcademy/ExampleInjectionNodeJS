import { inject, injectable } from "inversify";
import { User } from "../../../domain/models/User";
import { IUserService} from '../IUserService';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import Types from "../../../../types";
import { UserDto } from '../../../domain/dtos/UserDTO';

@injectable()
export class UserService implements IUserService
{

  constructor(
    @inject(Types.IUserRepository) private userRepo:IUserRepository
  ){

  }

  async addUser(user: User): Promise<User> {

    const userDto = this.toUserDTO(user);
    const createUserDTO = await this.userRepo.create(userDto);
    return this.toUser(createUserDTO);

  }

  private toUser(userDTO: UserDto): User {
    return new User(
      userDTO.name,
      userDTO.email,
      null,
      userDTO.created_at,
      userDTO.update_at,
      userDTO._id
    )
  }

  private toUserDTO(user:User):UserDto{
    return {
      _id: user.getId,
      email: user.getEmail,
      name: user.getName,
      password: user.getPassword,
    }
  }
}
