// @flow
import {categoriesDishes} from 'data/categories';
import {menuItems} from 'data/menu-items';
import {restaurants} from 'data/restaurants';
import {RESTAURANT_EVENTS} from 'constants/restaurant';
import type {Dispatch} from 'types';

/**
 * Загружает данные о ресторанах
 * @returns {ThunkAction} - возвращает отложенное событие загрузки данных или ошибки загрузки данных
 */
export const loadRestaurantData = () => (dispatch: Dispatch) => {
	dispatch({
		type: RESTAURANT_EVENTS.LOADING
	});

	const categoriesPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(categoriesDishes);
		}, 500);
	});

	const menuItemsPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(menuItems);
		}, 500);
	});

	const restaurantsPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(restaurants);
		}, 500);
	});

	Promise.all([categoriesPromise, menuItemsPromise, restaurantsPromise])
		.catch(() => {
			dispatch({
				type: RESTAURANT_EVENTS.LOADING_ERROR
			});
			throw new Error('Случилось страшное');
		})
		.then(results => {
			dispatch({
				type: RESTAURANT_EVENTS.LOADED,
				data: {
					categories: results[0],
					menuItems: results[1],
					restaurantsList: results[2]
				}
			});

			return void 0;
		})
		.catch(error => {
			window.top.console.log(error.message);
		});
};
