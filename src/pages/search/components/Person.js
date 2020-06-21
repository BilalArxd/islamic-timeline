import React from 'react';
import Typography from '@material-ui/core/Typography';

import FaceIcon from '@material-ui/icons/Face';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SearchItem from '../../../components/SearchItem';

export default function Person(props) {
	const { item, events } = props;
	const filteredEvents = events.filter((e, i) => {
		if (e.personIds.includes(item.id)) {
			return true;
		}
		return false;
	});
	const relatedEvents = filteredEvents.map((e, i) => {
		return (
			<Typography key={i}>
				{i + 1} - {e.title}
			</Typography>
		);
	});
	const primaryTagDescription = (
		<React.Fragment>
			<Typography>{item.id}</Typography>
			<Typography>{item.name.arabic}</Typography>
			<Typography>
				{item.year.from} ─ {item.year.to}
			</Typography>
		</React.Fragment>
	);

	return (
		<SearchItem
			title={`${item.name.english}`}
			color={'secondary'}
			primaryTagIcon={<FaceIcon />}
			primaryTagDescription={primaryTagDescription}
			secondaryTagTitle={'Related Events'}
			secondaryTagIcon={<EventAvailableIcon />}
			secondaryTagCount={filteredEvents.length}
			secondaryTagDescription={relatedEvents}
		/>
	);
}
