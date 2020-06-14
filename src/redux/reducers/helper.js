// Create reducer helper
const createReducer = (initialState, handlers) => (state = initialState, action) => {
	const { type } = action;
	if (!handlers.hasOwnProperty(type)) return state;

	return handlers[type](state, action);
};

export { createReducer };
