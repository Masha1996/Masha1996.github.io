// @flow
import {FILE, PARTICIPANT} from 'constants/app';
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
