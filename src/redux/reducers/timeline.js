import * as types from '../types';
import { createReducer } from './helper';
import Logger from '../../utils/Logger';
import persons from '../../data/newPersons.json';
import events from '../../data/events.json';

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

const prepareData = (year) => {
	const filteredEvents = events.filter((item) => {
		return item.year === year;
	});
	const filteredPersons = persons.filter((item) => {
		let inBothRange = item.year.from < year && item.year.to > year;
		//let inOneRange = (item.year.from < year && item.year.to === 0) || (item.year.to > year && item.year.from === 0);
		return inBothRange;
	});
	const items = [ ...filteredPersons, ...filteredEvents ];
	Logger.log(`prepareData.items => ${items.length}`);
	return items;
};

const initialState = {
	min: 550,
	max: 670,
	step: 1,
	marks: setMarks(550, 670, 30),
	selectedYear: 610,
	data: { events, persons },
	items: prepareData(610)
};

const setTimelineField = (state, { field }) => {
	Logger.log(`TimelineReducer.setTimelineField`);
	Logger.log(`=> field: ${field.selectedYear}`);

	// let newState = {
	// 	...state,
	// 	...field,
	// 	items: prepareData(field.selectedYear)
	// };
	// Logger.log(`=> newState.items: ${newState.items.length}`);
	return {
		...state,
		...field,
		items: prepareData(field.selectedYear)
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
