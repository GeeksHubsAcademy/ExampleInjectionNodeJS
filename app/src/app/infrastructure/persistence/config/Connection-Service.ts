import { injectable } from "inversify";
import { Connection, createConnection, Repository } from "typeorm";

injectable()
export class ConnectionService {


  private _conn:Connection = null;

  async getRepo<T>(target:string | (new () =>{})):Promise<Repository<T>> {

   try{
    const connection =  await  this._getConn();
   // console.log("Recibido" + JSON.stringify(connection));
    return await connection.getRepository<T>(target);
   }catch(error){
     console.log("Error en la recuperación del respositorio"+ error.message)
   }

  }

  private async _getConn(){

    if(this._conn){
      return this._conn;
  }
  try{
    console.log("Creando conexión por primera vez");
    this._conn= await createConnection({
        type: 'mongodb',
        host: 'mongodb',
        port: 27017,
        username: '',
        password: '',
        logging: true,
        database: 'agenda',
        entities: ['dist/**/*.entity.js']
    });
    //console.log("Conexión ->"+this._conn);
    return this._conn;

  }catch(error){
  console.log("Error en la conexión "+error.message)
  }
}
}
