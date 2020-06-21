const sheetData = require('./src/data/sheetData.min.json');
const fs = require('fs');

const newPersons = (count) => {
	var cells = sheetData;
	console.log('parsed');
	let persons = [];
	let person = {};
	cells.forEach((cell) => {
		const { t, r, c } = cell;
		if (r < count + 1) {
			const content = t.split('\n');
			if (r > 1) {
				switch (parseInt(c)) {
					case 1:
						person = {};
						person.id = parseInt(content[0]);
						person.year = { from: 0, to: 0 };
						break;
					case 2:
						person.name = {
							english: content[0],
							arabic: content[2],
							Kunya: content[1]
						};
						break;
					case 3:
						person.lineage = content[0];
						person.role = content[1];
						break;
					case 4:
						person.birth = { ah: null, bh: null, ce: 0, text: null };
						if (content.toString().toLowerCase().includes(' ah')) {
							person.birth.ah = parseInt(
								content.toString().toLowerCase().replace(' ah', '@').split('@')[0]
							);
						}
						if (content.toString().toLowerCase().includes(' bh')) {
							person.birth.bh = parseInt(
								content.toString().toLowerCase().replace(' bh', '@').split('@')[0]
							);
						}

						person.birth.ce = parseInt(
							content.toString().toLowerCase().replace(' ce', '@').split('@')[0].split('/')[1]
						);
						person.birth.ce = isNaN(person.birth.ce) ? 0 : person.birth.ce;

						person.birth.text = content.toString();
						person.year.from = person.birth.ce;

						break;
					case 5:
						person.death = { ah: null, bh: null, ce: 0, text: null, reason: null };
						if (content.toString().toLowerCase().includes(' ah')) {
							person.death.ah = parseInt(
								content.toString().toLowerCase().replace(' ah', '@').split('@')[0]
							);
						}
						if (content.toString().toLowerCase().includes(' bh')) {
							person.death.bh = parseInt(
								content.toString().toLowerCase().replace(' bh', '@').split('@')[0]
							);
						}

						person.death.ce = parseInt(
							content.toString().toLowerCase().replace(' ce', '@').split('@')[0].split('/')[1]
						);
						person.death.ce = isNaN(person.death.ce) ? 0 : person.death.ce;
						person.death.text = content[0];
						person.death.reason =
							content.length > 1
								? content[1].toString().replace('[', '').replace(']', '').replace(' ', '')
								: '';
						person.year.to = person.death.ce;
						person.age = person.death.ce - person.birth.ce;
						break;
					case 6:
						person.interests = content;
						break;
					case 7:
						person.resources = content;
						break;
					case 8:
						person.links = content[0].split(', ');
						person.type = 'PERSON';
						persons.push(person);
						break;
					default:
						break;
				}
			}
		}
	});
	return persons;
};

fs.writeFile(`newPersons.json`, JSON.stringify(newPersons(1000000)), function(err) {
	if (err) throw err;
	console.log('Saved!');
});
