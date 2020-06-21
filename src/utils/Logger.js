const debug = false;

const log = (message) => {
	if (debug) {
		console.log(message);
	}
};

export default {
	log: log
};
