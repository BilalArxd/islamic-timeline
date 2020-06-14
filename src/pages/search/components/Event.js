import React from 'react';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SearchItem from '../../../components/SearchItem';
import SearchItemTwo from '../../../components/SearchItem';

export default function Events(props) {
	const { item, persons } = props;
	const filteredPersons =
		persons &&
		persons.filter((person, i) => {
			if (item.personIds.includes(person.id)) {
				return true;
			}
			return false;
		});
	const relatedPersons = filteredPersons.map((p, i) => {
		return (
			<Typography>
				{i + 1} - {p.name}
			</Typography>
		);
	});
	const mainPerson = filteredPersons.filter((p, i) => {
		if (p.id === item.personIds[0]) {
			return true;
		}
		return false;
	});

	return (
		<SearchItem
			key={`${item.type}-title`}
			title={item.title}
			subTitle={mainPerson[0].arabicName}
			year={`Year: ${item.year}`}
			description={item.description}
			primaryTagIcon={<EventAvailableIcon />}
			secondaryTagTitle={'Related Persons'}
			secondaryTagIcon={<FaceIcon />}
			secondaryTagCount={item.personIds.length}
			secondaryTagDescription={relatedPersons}
		/>
	);
}
