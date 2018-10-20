// @flow
import {CITY_EVENTS} from 'constants/city';

export type CityState = {
};

type CitySelectionData = {
	cityId: number
}

type CitySelectionAction = {
	data: CitySelectionData,
	type: typeof CITY_EVENTS.SELECTION

}

type UnknownCityAction = {
	type: typeof CITY_EVENTS.UNKNOWN

}

export type CityAction =
	| CitySelectionAction
	| UnknownCityAction;
