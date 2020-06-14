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
	const { item } = props;

	return (
		<Grid item lg={3} md={6} xs={12}>
			<Card className={classes.paper}>
				<CardContent>
					<Typography className={classes.title} color="textSecondary" gutterBottom>
						{item.name}
					</Typography>
					<Typography variant="h5" component="h2">
						{item.arabicName}
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						{`Born: ${item.born} - Died: ${item.died}`}
					</Typography>
					<Typography variant="body2" component="p" />
				</CardContent>
				<CardActions>
					<Chip icon={<FaceIcon />} label={item.type} color="primary" />
					<Badge badgeContent={item.events.length} color="primary">
						<Tooltip
							title={
								<React.Fragment>
									<Typography>Events</Typography>

									{item.events &&
										item.events.map((event, i) => {
											return (
												<Typography>
													{i + 1} - {event.title}
												</Typography>
											);
										})}
								</React.Fragment>
							}
						>
							<Chip clickable icon={<EventAvailableIcon />} label={'EVENTS'} color="default" />
						</Tooltip>
					</Badge>
				</CardActions>
			</Card>
		</Grid>
	);
}
