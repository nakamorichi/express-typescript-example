import { assert } from 'chai';
import 'mocha';

const promiseTest = (): Promise<number> => new Promise((resolve, reject) => {
	resolve(1);
});

describe('Example async/await test', () => {
	it('awaits promise', async () => {
		const x = await promiseTest();
		assert.equal(x, 1);
	});
});
