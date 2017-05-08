import * as Express from 'express';

export const orangesGet = (req: Express.Request, res: Express.Response) => {
	res.send({ message: 'oranges' });
};
