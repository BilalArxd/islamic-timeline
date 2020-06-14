import { SET_HOME_FIELD, CLEAR_HOME_FIELDS } from '../types';
import Logger from '../../utils/Logger';

export const setHomeField = (field) => (dispatch) => {
	Logger.log(`Actions.setHomeField`);
	Logger.log(`=> field: ${JSON.stringify(field)}`);

	dispatch({
		type: SET_HOME_FIELD,
		field: field
	});
};

export const clearHomeFields = () => (dispatch) => {
	Logger.log(`Actions.setHomeField`);

	dispatch({
		type: CLEAR_HOME_FIELDS
	});
};
