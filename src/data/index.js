import persons from './persons.json';
import events from './events.json';

export default () => {
	let data = { persons, events };
	return data;
};
