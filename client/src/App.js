import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes';
import store from './store';
import style from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';
import getUserAction from './store/actions/user';

const App = () => {
	useEffect(() => {
		store.dispatch(getUserAction())
	}, [])
	return (
		<div className={style.app}>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Routes />
				</ConnectedRouter>
			</Provider>
		</div>
	);
}

export default App;
