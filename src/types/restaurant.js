// @flow
import {RESTAURANT_EVENTS} from 'constants/restaurant';
import type {Dish, Restaurant} from 'types/data';

export type RestaurantState = {}

type RestaurantLoadedData = {
	categories: Array<number>,
	menuItems: Array<Dish>,
	restaurantsList: Array<Restaurant>
}

type RestaurantLoadedAction = {
	data: RestaurantLoadedData,
	type: typeof RESTAURANT_EVENTS.LOADED
}
type RestaurantLoadingAction = {
	type: typeof RESTAURANT_EVENTS.LOADING
}
type RestaurantLoadingErrorAction = {
	type: typeof RESTAURANT_EVENTS.LOADING_ERROR
}

type UnknownCartAction = {
	type: typeof RESTAURANT_EVENTS.UNKNOWN
}

export type RestaurantAction =
	| RestaurantLoadedAction
	| RestaurantLoadingAction
	| RestaurantLoadingErrorAction
	| UnknownCartAction;
