import React from 'react';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import { Loading } from './components/Loading';
import { Router } from 'react-router-dom';
import history from './history';
import Root from './pages';

function App() {
	return (
		<Provider store={store}>
			{/* <PersistGate
				loading={<Loading />}
				//persistor={persistor}
			> */}
			<Router history={history}>
				<Root />
			</Router>
			{/* </PersistGate> */}
		</Provider>
	);
}

export default App;
