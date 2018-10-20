// @flow
import type {Dish, Restaurant} from 'types/data';

export type Props = {
	cityId: string,
	dishes: Array<Dish>,
	error: boolean,
	loadAppData: () => void,
	loading: boolean,
	restaurants: Array<Restaurant>
};
