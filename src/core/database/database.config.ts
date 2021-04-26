import { IDatabaseConfig } from './interface/dbConfig.interface';

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        repositoryMode: true,
    },
    test: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        repositoryMode: true,
    },
    production: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        dialect: process.env.DB_DIALECT,
        repositoryMode: true,
    },
};
