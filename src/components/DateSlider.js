import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Actions from '../redux/actions';
import Logger from '../utils/Logger';
import { withRouter } from 'react-router-dom';

class DateSlider extends Component {
	valuetext = (value) => {
		return `${value}`;
	};

	handleChange = (event, value) => {
		Logger.log(`DateSlider.handleChange`);
		Logger.log(`=> value: ${JSON.stringify(value)}`);
		this.props.setTimelineField({
			selectedYear: value
		});
		// if (window.location.pathname !== '/search') {
		// 	Logger.log(`=> currentUrlPath: ${JSON.stringify(window.location.pathname)}`);
		// 	Logger.log(`=> redirectedTo: /search`);
		// 	this.props.history.push('/search');
		// }
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Slider
					className={classes.slider}
					value={this.props.timeline.selectedYear}
					onChange={this.handleChange}
					valueLabelDisplay="on"
					aria-labelledby="discrete-slider-always"
					marks={this.props.timeline.marks}
					min={this.props.timeline.min}
					max={this.props.timeline.max}
					getAriaValueText={this.valuetext}
				/>
				<Typography style={{ color: '#000' }}>Year</Typography>
			</div>
		);
	}
}

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	label: {
		backgroundColor: '#F00',
		textAlign: 'center'
	},
	slider: {
		marginTop: 20
	}
});

const mapStateToProps = (state) => ({
	timeline: state.timeline
});

const mapDispatchToProps = {
	setHomeField: Actions.setHomeField,
	setTimelineField: Actions.setTimelineField
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(withRouter(DateSlider)));
