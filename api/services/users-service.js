import {Inject, Injectable} from '../../core';
import {DatabaseService} from './database-service';

@Injectable()
export class UsersService {

    @Inject(DatabaseService)
    database;

    getUsers() {
        return [];
    }
}
