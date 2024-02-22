import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config()

const init = async () => {
    let sequelize: Sequelize;

    switch (process.env.DB_DIALECT) {

        case 'sqlite':

            if (!process.env.SQLITE_PATH) {
                throw new Error('SQLITE_PATH must be set for sqlite');
            }

            if (process.env.SQLITE_PATH !== ':memory:' && !fs.existsSync(process.env.SQLITE_PATH)) {
                throw new Error(`SQLite database file not found: ${process.env.SQLITE_PATH}`);
            }

            sequelize = new Sequelize({
                dialect: 'sqlite',
                storage: process.env.SQLITE_PATH,
                logging: false
            });

            break;

        case 'postgres':

            if (!process.env.PG_HOST) {
                throw new Error('PG_HOST must be set for postgres');
            }

            if (!process.env.PG_PORT) {
                throw new Error('PG_PORT must be set for postgres');
            }

            if (!process.env.PG_DB) {
                throw new Error('PG_DB must be set for postgres');
            }

            if (!process.env.PG_USER) {
                throw new Error('PG_USER must be set for postgres');
            }

            if (!process.env.PG_PASS) {
                throw new Error('PG_PASS must be set for postgres');
            }

            sequelize = new Sequelize(process.env.PG_DB, process.env.PG_USER, process.env.PG_PASS, {
                host: process.env.PG_HOST,
                port: parseInt(process.env.PG_PORT),
                dialect: 'postgres',
                logging: false
            });

            break;

        case 'mysql':

            if (!process.env.MYSQL_HOST) {
                throw new Error('MYSQL_HOST must be set for mysql');
            }

            if (!process.env.MYSQL_PORT) {
                throw new Error('MYSQL_PORT must be set for mysql');
            }

            if (!process.env.MYSQL_DB) {
                throw new Error('MYSQL_DB must be set for mysql');
            }

            if (!process.env.MYSQL_USER) {
                throw new Error('MYSQL_USER must be set for mysql');
            }

            if (!process.env.MYSQL_PASS) {
                throw new Error('MYSQL_PASSWORD must be set for mysql');
            }

            sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
                host: process.env.MYSQL_HOST,
                port: parseInt(process.env.MYSQL_PORT),
                dialect: 'mysql',
                logging: false
            });

            break;

        case 'mariadb':

            if (!process.env.MARIADB_HOST) {
                throw new Error('MARIADB_HOST must be set for mariadb');
            }

            if (!process.env.MARIADB_PORT) {
                throw new Error('MARIADB_PORT must be set for mariadb');
            }

            if (!process.env.MARIADB_DB) {
                throw new Error('MARIADB_DB must be set for mariadb');
            }

            if (!process.env.MARIADB_USER) {
                throw new Error('MARIADB_USER must be set for mariadb');
            }

            if (!process.env.MARIADB_PASS) {
                throw new Error('MARIADB_PASS must be set for mariadb');
            }

            sequelize = new Sequelize(process.env.MARIADB_DB, process.env.MARIADB_USER, process.env.MARIADB_PASS, {
                host: process.env.MARIADB_HOST,
                port: parseInt(process.env.MARIADB_PORT),
                dialect: 'mariadb',
                logging: false
            });

            break;

        default:
            throw new Error(`Unsupported dialect: ${process.env.DB_DIALECT}`);
    }

    try {
        await sequelize.authenticate();
    } catch (error) {
        throw new Error('Unable to connect to the database');
    }

    return sequelize;

}

export default init;
