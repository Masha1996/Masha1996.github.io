// @flow

import {FILTER_EVENTS} from 'constants/filter';

export type FilterState = {
	dishCategories: Array<string>
}

type UpdateFilterData = {
	name: string,
	value: string,
	add: boolean
}

type UpdateFilterAction = {
	data: UpdateFilterData,
	type: typeof FILTER_EVENTS.UPDATE
}

type UnknownFilterAction = {
	type: typeof FILTER_EVENTS.UNKNOWN
}

export type FilterAction =
	| UpdateFilterAction
	| UnknownFilterAction;
