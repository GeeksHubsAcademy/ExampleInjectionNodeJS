import { controller, httpGet, httpPost, request, response } from 'inversify-express-utils';
import { Request, Response } from "express";
import { User } from '../../domain/models/User';
import { inject } from 'inversify';
import Types from '../../../types';
import { IUserService } from '../../application/services/IUserService';

@controller('/api')
export class HelloController {
  constructor(
    @inject(Types.IUserService) private userService:IUserService
  ){}
  @httpGet('/')
  public helloWorld(request:any, response:Response){
      response.send("Hello World2S");
  }

  @httpGet('/users')
  public async listUsers(){
    return this.userService.listUsers();
  }

  @httpPost("/users")
  public async createUser(@request() req: Request, @response() res: Response){

    try{
   await this.userService.addUser(
      new User(
        req.body.name,
        req.body.email,
        req.body.password,
        new Date(),
        new Date()
        )
   );
   res.status(200).json({"message":"Usario creado"});
    }catch(error){
      res.status(400).json({error:error.message});
    }
  }
}
