import persons from './persons.json';
import events from './events.json';

export default () => {
	let nPersons = [ ...persons ];
	let nEvents = [ ...events ];
	let data = [ ...persons, ...events ];
	for (let i = 0; i < data.length; i++) {
		let item = data[i];
		if (item.type === 'EVENT') {
			item.persons = [];
			var eventPersons = nPersons.filter((p) => {
				return item.personIds.includes(p.id);
			});
			item.persons = eventPersons;
		}
		if (item.type === 'PERSON') {
			nEvents.map((e) => {
				if (e.personIds.includes(item.id) && !item.events.includes(e)) {
					let event = { ...e, persons: [] };
					item.events.push(event);
				}
				return e;
			});
		}
	}

	return data;
};
