import * as types from '../types';
import { createReducer } from './helper';
import Logger from '../../utils/Logger';

const initialState = {
	header: 'Islamic Timeline',
	description: 'Select a Hijri Year from bottom slider to see important people, events and places.'
};

const setHomeField = (state, { field }) => {
	Logger.log(`HomeReducer.setHomeField`);
	Logger.log(`=> field: ${field}`);
	return {
		...state,
		...field
	};
};

const clearHomeFields = (state) => {
	Logger.log(`HomeReducer.clearHomeField`);
	return {
		...initialState
	};
};

const home = createReducer(initialState, {
	[types.SET_HOME_FIELD]: setHomeField,
	[types.CLEAR_HOME_FIELDS]: clearHomeFields
});

export default home;
