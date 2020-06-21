import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
	};

	render() {
		return (
			<Slider
				value={this.props.timeline.selectedYear}
				onChange={this.handleChange}
				valueLabelDisplay="on"
				aria-labelledby="discrete-slider-always"
				marks={this.props.timeline.marks}
				min={this.props.timeline.min}
				max={this.props.timeline.max}
				getAriaValueText={this.valuetext}
				step={this.props.timeline.step}
			/>
		);
	}
}

const useStyles = makeStyles({});

const mapStateToProps = (state) => ({
	timeline: state.timeline
});

const mapDispatchToProps = {
	setHomeField: Actions.setHomeField,
	setTimelineField: Actions.setTimelineField
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(withRouter(DateSlider)));
