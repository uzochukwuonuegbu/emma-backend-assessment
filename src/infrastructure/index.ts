import 'reflect-metadata';

import * as express from 'express';
import server from './server';


export const setupServer = async (app: express.Application) => {
    await server(app);
    console.log('Server loaded!');
};