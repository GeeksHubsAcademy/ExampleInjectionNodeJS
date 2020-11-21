import {Response} from 'express';
import { controller, httpGet } from 'inversify-express-utils';

@controller('/hello')
export class HelloController {
  constructor(){}
  @httpGet('/')
  public helloWorld(request:any, response:Response){
      response.send("Hello World");
  }
}
