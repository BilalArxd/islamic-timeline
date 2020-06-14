import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Typography } from '@material-ui/core';
import Person from './components/Person';
import Event from './components/Event';
import Grid from '@material-ui/core/Grid';
import GetData from '../../data';

export class Search extends Component {
	render() {
		const { classes, data, year } = this.props;
		const { events, persons } = data;
		const filteredEvents = events.filter((item) => {
			return item.year === year;
		});
		const filteredPersons = persons.filter((item) => {
			return item.born < year && item.died > year;
		});
		//Logger.log(`Search.render.data => ${JSON.stringify(data)}`);

		return (
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Typography variant="h5" style={{ margin: 10 }}>
						Events
					</Typography>
					<Grid container spacing={1}>
						{filteredEvents && filteredEvents.length > 0 ? (
							filteredEvents.map((item, index) => {
								return <Event item={item} persons={persons} key={`event-${index}`} />;
							})
						) : (
							<Typography variant="h6" style={{ margin: 10 }}>
								No event available for selected year
							</Typography>
						)}
					</Grid>
					<br />
					<br />
					<Typography variant="h5" style={{ margin: 10 }}>
						Persons
					</Typography>
					<Grid container spacing={1}>
						{filteredPersons && filteredPersons.length > 0 ? (
							filteredPersons.map((item, index) => {
								return <Person item={item} events={events} key={`person-${index}`} />;
							})
						) : (
							<Typography variant="h6" style={{ margin: 10 }}>
								No person available for selected year
							</Typography>
						)}
					</Grid>
				</Grid>
			</div>
		);
	}
}
const useStyles = (theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
});
const mapStateToProps = (state) => ({
	data: state.timeline.data,
	year: state.timeline.selectedYear
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Search));
