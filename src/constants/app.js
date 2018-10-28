// @flow
const SELECTED: 'SELECTED' = 'SELECTED';
const ADD: 'ADD' = 'ADD';
const WINNER: 'WINNER' = 'WINNER';
const UNKNOWN: 'UNKNOWN' = 'UNKNOWN';
const ACTIVE: 'ACTIVE' = 'ACTIVE';
const NUMBER: 'NUMBER' = 'NUMBER';
const CALCULATION: 'CALCULATION' = 'CALCULATION';

export const FILE = {
	SELECTED,
	UNKNOWN
};

export const PARTICIPANT = {
	ADD,
	WINNER
};

export const BLOCK = {
	ACTIVE,
	NUMBER
};

export const SCORE = {
	CALCULATION
};

export const defaultAppAction = {
	type: FILE.UNKNOWN
};
