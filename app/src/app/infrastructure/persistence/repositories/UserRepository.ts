import { injectable } from "inversify";
import { UserDto } from '../../../domain/dtos/UserDTO';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { UserEntity } from '../entities/User.entity';
import { ConnectionService } from '../config/Connection-Service';


@injectable()
export class UserRepository implements IUserRepository{

  private  conn;

  constructor(){
    this.conn =  new ConnectionService();
  }

  async findAll(): Promise<UserDto[]> {
    try{
    let repo =await this.conn.getRepo(UserEntity);
    return repo.find();
    }catch(error){
      console.log("Error en el retorno de usuarios "+ error.message);
    }finally{
      //this.conn.closeConnection();
    }
  }


  async create(user: UserDto): Promise<UserDto> {
    try{
    let repo = await this.conn.getRepo(UserEntity)
    return repo.save(user);
  }
    catch(error){
     console.log("Error "+ error.message);
    }finally{
     // this.conn.closeConnection();
    }
  }





}
