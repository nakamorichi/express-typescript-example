import * as Express from 'express';

import { appleGet, applesGet } from 'routes/apples';
import { orangesGet } from 'routes/oranges';

export const initRoutes = (app: Express.Application) => {
	app.get('/apple/:id', appleGet);
	app.get('/apples', applesGet);
	app.get('/oranges', orangesGet);
};
