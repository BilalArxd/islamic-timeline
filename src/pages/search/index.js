import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Typography } from '@material-ui/core';
import Person from './components/Person';
import Event from './components/Event';

export class Search extends Component {
	constructor(props) {
		super(props);
		//const length = props.items.length;
		this.state = {
			//items: props.items.slice(0, 1),
			//hasMore: 1 < props.items.length
		};
	}

	// getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	if (prevProps.items.length !== this.props.items.length) {
	// 		return true;
	// 	}
	// 	return null;
	// }
	// componentDidUpdate(prevProps, prevState, snapshot) {
	// 	// If we have a snapshot value, we've just added new items.
	// 	// Adjust scroll so these new items don't push the old ones out of view.
	// 	// (snapshot here is the value returned from getSnapshotBeforeUpdate)
	// 	if (snapshot !== null) {
	// 	}
	// }

	componentDidMount() {
		//this.recursive();
	}

	recursive = () => {
		setTimeout(() => {
			let hasMore = this.state.items.length + 1 < this.props.items.length;
			this.setState((prev, props) => ({
				items: this.props.items.slice(0, prev.items.length + 100),
				hasMore
			}));
			if (hasMore) this.recursive();
		}, 0);
	};
	render() {
		const { classes, data, items } = this.props;
		const { events, persons } = data;

		return (
			<div className={classes.root}>
				{/* {this.state.hasMore ? (
					<Typography variant="h6" style={{ margin: 10 }}>
						{`Loading...`}
					</Typography>
				) : null} */}
				<Typography variant="subtitle1" style={{ margin: 10 }}>
					{`Found ${items.length} persons and ${events.length} events for selected year.`}
				</Typography>

				{items && items.length > 0 ? (
					items.map((item) => {
						return item.type === 'EVENT' ? (
							<Event item={item} persons={persons} key={`event-${Math.random()}-${Math.random()}`} />
						) : (
							<Person item={item} events={events} key={`person-${Math.random()}-${Math.random()}`} />
						);
					})
				) : (
					<Typography variant="h6" style={{ margin: 10 }}>
						No data available for selected year.
					</Typography>
				)}
			</div>
		);
	}
}
const useStyles = (theme) => ({
	root: {
		justifyContent: 'left',
		flexWrap: 'wrap'
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
});
const mapStateToProps = (state) => ({
	data: state.timeline.data,
	items: state.timeline.items,
	year: state.timeline.selectedYear
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Search));
