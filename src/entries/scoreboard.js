// @flow
import {initialState} from 'constants/index';
import {Provider} from 'react-redux';
import React from 'react';
import {render} from 'react-dom';
import configureStore from 'store';
import Scoreboard from 'components/Scoreboard';

const root = document.getElementById('root');

if (root) {
	const store = configureStore(initialState);

	render(
		<Provider store={store}>
			<Scoreboard />
		</Provider>,
		root
	);
}
