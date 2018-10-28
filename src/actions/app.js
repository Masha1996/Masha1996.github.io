// @flow
import {FILE, PARTICIPANT, BLOCK, SCORE} from 'constants/app';
import type {Dispatch} from 'types';

export const listParticipants = (target) => (dispatch: Dispatch) => {
	const file = target.files[0];

	const reader = new FileReader();
	reader.readAsText(file);

	reader.onload = () => {
		const result = reader.result.split('\n').filter(str => str).map(line => {
			const [number, name, age, dan, weight, trainer] = line.split(',');
			return {
				number,
				name,
				age,
				dan,
				weight,
				trainer,
				score: 0
			}
		});
		dispatch({
			type: FILE.SELECTED,
			data: {
				listParticipants: result
			}
		});
	};
};

export const participantAdd = (stage, block, item, value) => (dispatch: Dispatch) => {
	dispatch({
		type: PARTICIPANT.ADD,
		data: {
			stage: stage,
			block: block,
			item: item,
			value: value
		}
	});
};

export const participantWinner = (stage, block, item) => (dispatch: Dispatch) => {
	dispatch({
		type: PARTICIPANT.WINNER,
		data: {
			stage: stage,
			block: block,
			item: item
		}
	});
};

export const battleNumber = (stage, block, item, value) => (dispatch: Dispatch) => {
	dispatch({
		type: BLOCK.NUMBER,
		data: {
			stage: stage,
			block: block,
			item: item,
			value: value
		}
	});
};

export const activeBlock = (state, block) => (dispatch: Dispatch) => {
	const activeBlock = [state, block];
	dispatch({
		type: BLOCK.ACTIVE,
		data: {
			activeBlock: activeBlock
		}
	});
};

export const calculationScore = (action, stage, block, item) => (dispatch: Dispatch) => {
	dispatch({
		type: SCORE.CALCULATION,
		data: {
			stage: stage,
			block: block,
			item: item,
			action: action
		}
	});
};
