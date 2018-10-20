// @flow
import {APP_EVENTS} from 'constants/app';
import {dishes} from 'data/dishes';
import {restaurants} from 'data/restaurants';
import type {Dispatch} from 'types';

export const loadAppData = () => (dispatch: Dispatch) => {
	dispatch({
		type: APP_EVENTS.LOADING
	});

	/*
	fetch('data/dishes')
		.catch(error => {
			dispatch({
				type: 'appDataloadingError'
			})
		})
		.then(result => {
			return result.json();
		})
		.then(json => {
			dispatch({
				type: 'appDataLoaded',
				data: {
					dishes,
					restaurants
				}
			});
		});
		*/

	const dishesPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(dishes)
		}, 500);
	});

	const restaurantsPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(restaurants)
		}, 500);
	});

	Promise.all([dishesPromise, restaurantsPromise])
		.catch(() => {
			dispatch({
				type: APP_EVENTS.LOADING_ERROR
			});
			throw new Error('Случилось страшное');
		})
		.then(results => {
			dispatch({
				type: APP_EVENTS.LOADED,
				data: {
					dishes: results[0],
					restaurants: results[1]
				}
			});
		})
		.catch(error => {
			window.top.console.log(error.message);
		})
};
