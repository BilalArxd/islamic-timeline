import React from 'react';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SearchItem from '../../../components/SearchItem';

export default function Events(props) {
	const { item, persons } = props;
	const filteredPersons = persons && persons.filter((person, i) => item.personIds.includes(person.id));
	const relatedPersons = filteredPersons.map((p, i) => (
		<Typography key={`${i}-${Math.random()}`}>{`${i + 1} - ${p.name.arabic}`}</Typography>
	));
	return (
		<SearchItem
			key={`event-event-${Math.random()}-${Math.random()}`}
			title={`${item.year} ⇢ ${item.title}`}
			color={'primary'}
			primaryTagIcon={<EventAvailableIcon />}
			secondaryTagTitle={'Related Persons'}
			secondaryTagIcon={<FaceIcon />}
			secondaryTagCount={item.personIds.length}
			secondaryTagDescription={relatedPersons}
		/>
	);
}
