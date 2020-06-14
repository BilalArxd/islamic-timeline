import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import Person from './components/Person';
import Event from './components/Event';
import Grid from '@material-ui/core/Grid';
import GetData from '../../data';

export class Search extends Component {
	render() {
		const { classes, year } = this.props;
		const data = this.props.data.filter((item) => {
			if (item.type === 'EVENT') {
				return item.year === year;
			}
			if (item.type === 'PERSON') {
				return item.born < year && item.died > year;
			}
			return false;
		});
		//Logger.log(`Search.render.data => ${JSON.stringify(data)}`);

		return (
			<div className={classes.root}>
				<Grid container spacing={1}>
					{data &&
						data.map((item, index) => {
							return item.type === 'EVENT' ? (
								<Event item={item} key={`event-${index}`} />
							) : item.type === 'PERSON' ? (
								<Person item={item} key={`person-${index}`} />
							) : null;
						})}
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
