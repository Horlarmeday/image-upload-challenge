import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { Sequelize } from "sequelize-typescript";
import { Image } from "../../modules/images/entities/image.entity";
import { Thumbnail } from "../../modules/images/entities/thumbnail.entity";


let config;
switch (process.env.NODE_ENV) {
    case DEVELOPMENT:
        config = databaseConfig.development;
        break;
    case TEST:
        config = databaseConfig.test;
        break;
    case PRODUCTION:
        config = databaseConfig.production;
        break;
    default:
        config = databaseConfig.development;
}
const sequelize = new Sequelize(config);
sequelize.addModels([Image, Thumbnail]);

export default sequelize;
