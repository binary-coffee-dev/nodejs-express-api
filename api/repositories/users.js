import {Inject, Injectable} from '../../core';
import {Database} from '../services';
import User from '../models/user';

@Injectable()
export class Users {

    @Inject(Database)
    database;

    constructor() {
        this.model = this.database.getModel(User);
    }

    async list() {
        return await this.model.find();
    }
}
