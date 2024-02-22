import init from './database';
import { promises as fsPromises } from 'fs';

(async () => {

    const data = await fsPromises.readFile('./package.json', 'utf8');
    const packageJson = JSON.parse(data);
    const version = packageJson.version;

    console.log(`
------------------------------------------------
Open Suite HUB v${version}

Environment : ${process.env.NODE_ENV}
Started     : ${new Date().toISOString()}
------------------------------------------------
    `);

    console.log('Initialising database...')
    console.time('Database Initialised');

    const sequelize = await init();

    console.timeEnd('Database Initialised');

    // console.log(sequelize);
})()