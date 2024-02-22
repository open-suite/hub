import init from './database';
import app from './server';
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sequelize = await init();

    console.timeEnd('Database Initialised');

    sequelize.close()

    console.log('Starting server...')

    app.listen(process.env.port, () => {
        console.log(`OpenSuite HUB running on port ${process.env.port}`)
        console.log(`You can access this locally at \x1b[32mhttp://localhost:${process.env.port}\x1b[0m...`)
    })

})()