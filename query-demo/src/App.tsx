import Deduplication from './components/Deduplication';
import FetchFromMultipleEndpoints from './components/FetchFromMultipleEndpoints';
import FetchOneItem from './components/FetchOneItem';
import MutatingData from './components/MutatingData';
import RefetchInterval from './components/RefetchInterval';
import StaleTime from './components/StaleTime';
import WithTanstackQuery from './components/WithTanstackQuery';

const App = () => {
	return (
		<div>
			{/* <WithTanstackQuery /> */}
			{/* <Deduplication />
			<Deduplication /> */}
			{/* <FetchOneItem /> */}
			{/* <StaleTime /> */}
			{/* <RefetchInterval /> */}
			{/* <FetchFromMultipleEndpoints /> */}
			<MutatingData />
		</div>
	);
};

export default App;
