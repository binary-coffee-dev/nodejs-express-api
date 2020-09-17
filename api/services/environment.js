import {Injectable} from '../../core';

@Injectable()
export class Environment {
    constructor() {
        this.env = process.env.NODE_ENV || 'development';
    }
}
