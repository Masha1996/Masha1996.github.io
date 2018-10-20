// @flow
import type {AppState} from './app';
import type {CartState} from './cart';
import type {CityState} from './city';
import type {FilterState} from './filter';
import type {RestaurantState} from './restaurant';

type Action = {
	data?: any,
	type: string
};

export type State = {
	app: AppState,
	cart: CartState,
	city: CityState,
	filter: FilterState,
	restaurant: RestaurantState
};

/* eslint-disable no-use-before-define */
export type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => void;
/* eslint-enable no-use-before-define */
