import { add } from '@/utils';

const ServerClient = () => {
	const result = add(1, 2);
	console.log(result);
	throw new Error('错误');
};

export default ServerClient;
