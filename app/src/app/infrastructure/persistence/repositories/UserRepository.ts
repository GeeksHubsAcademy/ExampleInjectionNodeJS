import { injectable } from "inversify";
import { UserDto } from '../../../domain/dtos/UserDTO';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { UserEntity } from '../entities/UserEntity.entity';
import { ConnectionService } from '../config/Connection-Service';


@injectable()
export class UserRepository implements IUserRepository{


  async create(user: UserDto): Promise<UserDto> {
    try{
    let conn = new ConnectionService();
    let repo = await conn.getRepo(UserEntity)
    return repo.save(user);
  }
    catch(error){
     console.log("Error "+ error.message);
    }
  }





}
