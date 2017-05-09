import { Server } from 'server';

const app = new Server;
app.start();
const log = app.log;

export { app, log };
