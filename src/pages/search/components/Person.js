import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import { Chip, Badge, Tooltip } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SearchItem from '../../../components/SearchItem';

const useStyles = makeStyles({
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	paper: {
		minWidth: 200,
		minHeight: 200,
		padding: 10,
		textAlign: 'center'
	}
});

export default function Person(props) {
	const classes = useStyles();
	const { item, events } = props;
	const filteredEvents = events.filter((e, i) => {
		if (e.personIds.includes(item.id)) {
			return true;
		}
		return false;
	});
	const relatedEvents = filteredEvents.map((e, i) => {
		return (
			<Typography>
				{i + 1} - {e.title}
			</Typography>
		);
	});
	const relatedDescription = filteredEvents.map((e, i) => {
		return (
			<Typography>
				{i + 1} - {e.description}
			</Typography>
		);
	});

	return (
		<SearchItem
			title={item.arabicName}
			subTitle={item.name}
			description={relatedDescription}
			year={`Born: ${item.born} - Died: ${item.died}`}
			primaryTagIcon={<FaceIcon />}
			secondaryTagTitle={'Related Events'}
			secondaryTagIcon={<EventAvailableIcon />}
			secondaryTagCount={filteredEvents.length}
			secondaryTagDescription={relatedEvents}
		/>
	);
}
