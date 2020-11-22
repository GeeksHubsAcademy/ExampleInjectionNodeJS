import { Container } from 'inversify';
import './app/presentation/rest/app-controller';
import { IUserRepository } from './app/domain/repositories/IUserRepository';
import Types from './types';
import { UserRepository } from './app/infrastructure/persistence/repositories/UserRepository';
import { IUserService } from './app/application/services/IUserService';
import { UserService } from './app/application/services/impl/UserService';

let container = new Container();

//Repositories
container.bind<IUserRepository>(Types.IUserRepository).to(UserRepository);
//Services
container.bind<IUserService>(Types.IUserService).to(UserService);

export default container;
