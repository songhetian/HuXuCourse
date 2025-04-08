const Users = async () => {
	await new Promise(resolve => {
		setTimeout(() => resolve('ch'), 4000);
	});
	return <div>Users</div>;
};

export default Users;
