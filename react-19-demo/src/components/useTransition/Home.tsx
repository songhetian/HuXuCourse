import { useState, useTransition } from 'react';
import Help from './Help';
import Items from './Items';
import Concat from './Concat';
function Home() {
	const [activeTab, setActiveTab] = useState<string>('help');
	const [isPending, startTransition] = useTransition();

	const renderContent = () => {
		switch (activeTab) {
			case 'concat':
				return <Concat />;
			case 'help':
				return <Help />;
			case 'item':
				return <Items />;
			default:
				return <Home />;
		}
	};

	function handelChange(tab: string) {
		startTransition(() => {
			setActiveTab(tab);
		});
	}
	return (
		<>
			<div>
				<button
					className="border border-blue-400 ml-2 p-2"
					onClick={() => handelChange('concat')}
				>
					Concat
				</button>
				<button
					className="border border-blue-400 ml-2 p-2"
					onClick={() => handelChange('help')}
				>
					help
				</button>
				<button
					className="border border-blue-400 ml-2 p-2"
					onClick={() => handelChange('item')}
				>
					item
				</button>
			</div>
			{isPending && <h1>加载中...</h1>}
			<div>{!isPending && renderContent()}</div>
		</>
	);
}

export default Home;
