// @flow
const SELECTED: 'SELECTED' = 'SELECTED';
const ADD: 'ADD' = 'ADD';
const UNKNOWN: 'UNKNOWN' = 'UNKNOWN';

export const FILE = {
	SELECTED,
	UNKNOWN
};

export const PARTICIPANT = {
	ADD
}

export const defaultAppAction = {
	type: FILE.UNKNOWN
};
