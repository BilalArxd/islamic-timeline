import * as types from '../types';
import { createReducer } from './helper';
import Logger from '../../utils/Logger';
import GetData from '../../data';

const setMarks = (start, end, total) => {
	let marks = [];
	for (let index = start; index < end + 1; index += Math.round(end / total)) {
		marks.push({
			value: index,
			label: `${index}`
		});
	}
	marks.push({
		value: end,
		label: `${end}`
	});
	return marks;
};

const initialState = {
	min: 550,
	max: 670,
	marks: setMarks(550, 670, 30),
	selectedYear: 610,
	data: GetData()
};

const setTimelineField = (state, { field }) => {
	Logger.log(`TimelineReducer.setTimelineField`);
	Logger.log(`=> field: ${JSON.stringify(field)}`);
	return {
		...state,
		...field
	};
};

const clearTimelineFields = (state) => {
	Logger.log(`TimelineReducer.setTimelineField`);

	return {
		...initialState
	};
};

const timeline = createReducer(initialState, {
	[types.SET_TIMELINE_FIELD]: setTimelineField,
	[types.CLEAR_TIMELINE_FIELDS]: clearTimelineFields
});

export default timeline;
