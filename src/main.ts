import 'reflect-metadata';

import express from 'express';
import config from './config';
import { setupServer } from './infrastructure';

async function main() {
    const app = express();
    await setupServer(app);

    app.listen(config.port, () => {
    console.log(`Server listening on port: ${config.port}`);
    });
}

main();