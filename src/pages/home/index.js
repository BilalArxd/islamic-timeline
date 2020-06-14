import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import Actions from '../../redux/actions';

class Home extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Container className={classes.main}>
				<Typography variant="h3" component="h3" gutterBottom>
					{this.props.home.header}
				</Typography>
				<Typography gutterBottom>{this.props.home.description}</Typography>
			</Container>
		);
	}
}

const useStyles = (theme) => ({
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2)
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
	}
});
const mapStateToProps = (state) => ({
	home: state.home
});

const mapDispatchToProps = {
	setHomeField: Actions.setHomeField
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Home));
