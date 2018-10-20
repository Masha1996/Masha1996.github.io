// @flow
// import configureStore from 'store';
import {initialState} from 'constants/index';
import {Provider} from 'react-redux';
import React from 'react';
import {render} from 'react-dom';

const root = document.getElementById('root');

if (root) {
	// const store = configureStore(initialState);

	render(
		<Provider>Тралалл</Provider>,
		root
	);
}
