import mongoose from 'mongoose';

import {Inject, Injectable} from '../../core';
import models from '../models';
import {Environment} from './environment';
import databaseConfig from '../../config/database';

const modelMap = new Map();

@Injectable()
export class Database {

    @Inject(Environment)
    environment;

    constructor() {
        mongoose.connect(
            `mongodb://${databaseConfig[this.environment.env].host}:${databaseConfig[this.environment.env].port}/${databaseConfig[this.environment.env].database}`,
            {
                useNewUrlParser: databaseConfig[this.environment.env].useNewUrlParser || true,
                useUnifiedTopology: databaseConfig[this.environment.env].useUnifiedTopology || true
            }
        );

        Object.keys(models).forEach(key => {
            const modelSchema = new models[key]();
            const schema = new mongoose.Schema(modelSchema, {timestamps: true});
            const model = mongoose.model(modelSchema.constructor.name, schema);
            modelMap.set(modelSchema.constructor.name, model);
        });
    }

    getModel(clazz) {
        return modelMap.get(clazz.name);
    }
}
