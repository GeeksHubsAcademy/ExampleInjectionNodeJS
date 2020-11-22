import { injectable } from "inversify";
import { Connection,  Repository, getConnection } from 'typeorm';

injectable()
export class ConnectionService {

  private _conn:Connection;

  async getRepo<T>(target:string | (new () =>{})):Promise<Repository<T>> {

    try{
      const connection =  await  this._getConn();
      return await connection.getRepository<T>(target);
    }catch(error){
      console.log("Error en la recuperación del respositorio"+ error.message)
    }

  }

  private async _getConn(){
    return getConnection();
    if(this._conn){
      console.log("Devolviendo conexión ya creada");
        return getConnection();
    }
    // try{
    //   console.log("Creando conexión por primera vez");
    //   this._conn= await createConnection({
    //     type: 'mongodb',
    //     host: 'mongodb',
    //     port: 27017,
    //     username: '',
    //     password: '',
    //     logging: true,
    //     database: 'agenda',
    //     entities: ['dist/**/*.entity.js']
    //   });
    // //console.log("Conexión ->"+this._conn);
    //   return this._conn;
    // }catch(error){
    //   console.log("Error en la conexión "+error.message)
    // }
  }
  async closeConnection(){
    this._conn.close();
  }
}
