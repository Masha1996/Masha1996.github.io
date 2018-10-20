// @flow
import {APP_EVENTS} from 'constants/app';
import type {Category, Restaurant} from 'types/data';

export type AppState = {};

type AppLoadingData = {}

type AppLoadedData = {
	dishes: Array<Category>,
	restaurants: Array<Restaurant>
}

type AppLoadingErrorData = {}

type AppLoadingErrorAction = {
	data: AppLoadingErrorData,
	type: typeof APP_EVENTS.LOADING_ERROR
}

type AppLoadedAction = {
	data: AppLoadedData,
	type: typeof APP_EVENTS.LOADED
}

type AppLoadingAction = {
	data: AppLoadingData,
	type: typeof APP_EVENTS.LOADING
}

type UnknownAppAction = {
	type: typeof APP_EVENTS.UNKNOWN
}

export type AppAction =
	| AppLoadingAction
	| AppLoadedAction
	| AppLoadingErrorAction
	| UnknownAppAction;
