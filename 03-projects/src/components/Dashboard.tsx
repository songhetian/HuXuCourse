import Sidebar from './Sidebar';
import ProjectTable from './Table';

const Dashboard = () => {
	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<Sidebar />
			<div className="flex-1 bg-gray-800">
				{/* Table */}
				<ProjectTable />
			</div>
		</div>
	);
};

export default Dashboard;
