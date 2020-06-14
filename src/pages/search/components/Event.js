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

const useStyles = makeStyles({
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12,
		maxWidth: 400
	},
	paper: {
		minWidth: 200,
		minHeight: 200,
		padding: 10,
		textAlign: 'center'
	}
});

export default function Events(props) {
	const classes = useStyles();
	const { item } = props;
	const { mainPerson, persons } = item;
	const mainPersonIndex = mainPerson - 1;

	return (
		<Grid item lg={3} md={6} xs={12}>
			<Card className={classes.paper}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
						{persons[mainPersonIndex].name}
					</Typography>
					<Typography variant="h5" component="h2">
						{item.title}
					</Typography>
					<Typography noWrap className={classes.pos}>
						{item.description}
					</Typography>
					<Typography variant="body2" component="p" />
				</CardContent>
				<CardActions>
					<Chip icon={<EventAvailableIcon />} label={item.type} color="primary" />
					<Badge badgeContent={item.persons.length} color="primary">
						<Tooltip
							title={
								<React.Fragment>
									<Typography>Events</Typography>

									{item.persons &&
										item.persons.map((person, i) => {
											return (
												<Typography>
													{i + 1} - {person.name}
												</Typography>
											);
										})}
								</React.Fragment>
							}
						>
							<Chip clickable icon={<FaceIcon />} label={'PERSONS'} color="default" />
						</Tooltip>
					</Badge>
				</CardActions>
			</Card>
		</Grid>
	);
}
