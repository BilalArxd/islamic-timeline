import { SET_TIMELINE_FIELD, CLEAR_TIMELINE_FIELDS } from '../types';
import Logger from '../../utils/Logger';

export const setTimelineField = (field) => (dispatch) => {
	Logger.log(`Actions.setTimelineField`);
	Logger.log(`=> field: ${JSON.stringify(field)}`);
	dispatch({
		type: SET_TIMELINE_FIELD,
		field: field
	});
};

export const clearTimelineField = () => (dispatch) => {
	Logger.log(`Actions.clearTimelineField`);
	dispatch({
		type: CLEAR_TIMELINE_FIELDS
	});
};
