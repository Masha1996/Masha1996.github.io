// @flow
const SELECTED: 'SELECTED' = 'SELECTED';
const ADD: 'ADD' = 'ADD';
const UNKNOWN: 'UNKNOWN' = 'UNKNOWN';
const ACTIVE: 'ACTIVE' = 'ACTIVE';

export const FILE = {
	SELECTED,
	UNKNOWN
};

export const PARTICIPANT = {
	ADD
};

export const BLOCK = {
	ACTIVE
};

export const defaultAppAction = {
	type: FILE.UNKNOWN
};
