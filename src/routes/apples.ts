import * as Express from 'express';

export const appleGet = (req: Express.Request, res: Express.Response) => {
	const id: number = req.params.id;
	res.send({ id, message: 'apple' });
};

export const applesGet = (req: Express.Request, res: Express.Response) => {
	res.send({ message: 'apples' });
};
